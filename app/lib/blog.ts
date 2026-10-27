import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { PHOTOS, type PhotoKey } from "@/app/lib/photos";

// Posts are Markdown files in /content/blog with a small frontmatter block:
//
//   ---
//   title: Post title
//   description: One or two sentences for search results and cards.
//   date: 2026-10-01
//   category: Brakes
//   photo: liftBrakes        (a key from app/lib/photos.ts)
//   service: brake-repair    (slug of the related service page)
//   ---

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  photo: PhotoKey;
  service: string;
  readingMinutes: number;
};

export type Post = PostMeta & {
  html: string;
  toc: { id: string; text: string }[];
};

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("Blog post is missing its frontmatter block");
  const data: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    data[line.slice(0, i).trim()] = line
      .slice(i + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }
  return { data, body: match[2] };
}

// Posts are written with straight quotes; the rest of the site uses curly
// ones. Markdown syntax itself never uses quote characters, so this is safe
// to run on the raw source.
function smartQuotes(text: string) {
  return text
    .replace(/(^|[\s([{])"/g, "$1“")
    .replace(/"/g, "”")
    .replace(/(^|[\s([{])'/g, "$1‘")
    .replace(/'/g, "’");
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z#0-9]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function readPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, body } = parseFrontmatter(raw);
  if (!(data.photo in PHOTOS)) {
    throw new Error(`Post "${slug}" uses unknown photo "${data.photo}"`);
  }

  const toc: Post["toc"] = [];
  const html = (marked.parse(smartQuotes(body), { async: false }) as string).replace(
    /<h2>(.*?)<\/h2>/g,
    (_, inner: string) => {
      const id = slugify(inner);
      toc.push({ id, text: inner.replace(/<[^>]+>/g, "") });
      return `<h2 id="${id}">${inner}</h2>`;
    },
  );

  const words = body.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: smartQuotes(data.title),
    description: smartQuotes(data.description),
    date: data.date,
    category: data.category,
    photo: data.photo as PhotoKey,
    service: data.service,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html,
    toc,
  };
}

export function getAllPosts(): Post[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => readPost(f.replace(/\.md$/, "")))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
