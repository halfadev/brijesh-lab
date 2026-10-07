// Set NEXT_PUBLIC_SITE_URL in the deployment environment once the site has a
// real domain. Everything that builds absolute URLs (metadata, sitemap,
// RSS, OG images) reads from here.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://brijesh-lab.vercel.app").replace(
  /\/$/,
  "",
);

export const author = "Brijesh Ramakrishnan";

export const siteName = "Brijesh Ramakrishnan";

export const siteDescription =
  "Enterprise software for life sciences supply chains. Essays and lab notes on serialization, compliance, and the systems behind them.";

export const linkedinUrl = "https://www.linkedin.com/in/brijesh-ramakrishnan-36756564/";

export const emailAddress = "brijesh.ramakrishnan@gmail.com";

// Add these in the deployment environment when the destination URLs are ready.
export const calendlyUrl = (process.env.NEXT_PUBLIC_CALENDLY_URL ?? "").trim();

export const youtubeUrl = (
  process.env.NEXT_PUBLIC_YOUTUBE_URL ?? "https://www.youtube.com/watch?v=AlZYViIUws0"
).trim();

export const rssPath = "/feed.xml";
