// Set NEXT_PUBLIC_SITE_URL in the deployment environment once the site has a
// real domain. Everything that builds absolute URLs (metadata, sitemap,
// RSS, OG images) reads from here.
const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? vercelProductionUrl ?? "http://localhost:3000").replace(
  /\/$/,
  "",
);

export const author = "Brijesh Ramakrishnan";

export const siteName = "Brijesh Ramakrishnan";

export const siteDescription =
  "Structured pharmaceutical learning and selected technology experiments by Brijesh Ramakrishnan.";

export const linkedinUrl = "https://www.linkedin.com/in/brijesh-ramakrishnan-36756564/";

export const emailAddress = "brijesh.ramakrishnan@gmail.com";

export const calendlyUrl = (
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/brijesh-ramakrishnan/30min"
).trim();

export const youtubeUrl = (
  process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://www.youtube.com/watch?v=jrFZoEQb5MA"
).trim();

export const rssPath = "/feed.xml";
