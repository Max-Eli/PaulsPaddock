import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/app/components/Arrow";
import { formatDate, type PostMeta } from "@/app/lib/blog";
import { PHOTOS } from "@/app/lib/photos";

export function PostMetaLine({
  post,
  tone = "light",
}: {
  post: PostMeta;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wide ${tone === "dark" ? "text-ink-muted" : "text-paper-muted"}`}
    >
      <span className={tone === "dark" ? "text-m-light" : "text-m-red"}>{post.category}</span>
      <span aria-hidden>·</span>
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden>·</span>
      <span>{post.readingMinutes} min read</span>
    </p>
  );
}

export function PostCard({
  post,
  featured = false,
}: {
  post: PostMeta;
  featured?: boolean;
}) {
  const photo = PHOTOS[post.photo];
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block ${featured ? "grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12" : ""}`}
    >
      <div className={`overflow-hidden bg-paper-2 ${featured ? "lg:col-span-7" : ""}`}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={featured ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${featured ? "aspect-[16/10]" : "aspect-[3/2]"}`}
        />
      </div>
      <div className={featured ? "lg:col-span-5" : "mt-5"}>
        <PostMetaLine post={post} />
        <h3
          className={`mt-3 font-semibold leading-tight ${featured ? "text-3xl lg:text-4xl" : "text-xl"}`}
        >
          {post.title}
        </h3>
        <p className={`mt-3 leading-relaxed text-paper-muted ${featured ? "text-lg" : "line-clamp-3"}`}>
          {post.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          Read article
          <Arrow className="group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
