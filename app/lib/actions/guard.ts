// Spam controls shared by the booking and contact server actions.

import { headers } from "next/headers";

// A person takes longer than this to fill a form; bots submit on mount.
const MIN_FILL_TIME_MS = 2500;

// Best-effort per-IP burst limit. In-memory, so it resets on cold starts.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const ipHistory: Map<string, number[]> = new Map();

function getClientIP(h: Headers): string {
  const xff = h.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return h.get("x-real-ip") ?? "unknown";
}

function rateLimitOk(ip: string): boolean {
  const now = Date.now();
  const hist = (ipHistory.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (hist.length >= RATE_LIMIT_MAX) {
    ipHistory.set(ip, hist);
    return false;
  }
  hist.push(now);
  ipHistory.set(ip, hist);
  return true;
}

export function field(formData: FormData, key: string): string {
  return (formData.get(key) ?? "").toString().trim();
}

// True for submissions that should be silently accepted and dropped:
// rate-limited IPs, a filled honeypot, or a form filled faster than a human.
export async function isLikelyBot(formData: FormData): Promise<boolean> {
  const ip = getClientIP(await headers());
  if (!rateLimitOk(ip)) return true;
  if (field(formData, "company")) return true;
  const ts = Number.parseInt(field(formData, "ts"), 10);
  if (Number.isFinite(ts) && ts > 0 && Date.now() - ts < MIN_FILL_TIME_MS) {
    return true;
  }
  return false;
}

export const URL_RE = /\b(?:https?:\/\/|www\.)\S+/i;

export function tooManyLinks(text: string) {
  return (text.match(/https?:\/\//gi)?.length ?? 0) >= 3;
}
