import { getPublishedEntries } from "@/lib/content";
import { author, siteDescription, siteName, siteUrl } from "@/lib/site-config";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = getPublishedEntries();

  const items = entries
    .map((entry) => {
      const url = `${siteUrl}${entry.route}`;
      const pubDate = new Date(`${entry.date}T00:00:00Z`).toUTCString();

      return `    <item>
      <title>${escapeXml(entry.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(entry.dek)}</description>
      <author>${escapeXml(author)}</author>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteName)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
