import { author, emailAddress, linkedinUrl, youtubeUrl } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="footer">
      <span>{author}</span>
      <span className="footer-links">
        <a href={linkedinUrl}>LinkedIn</a>
        <a href={youtubeUrl}>YouTube</a>
        <a href={`mailto:${emailAddress}`}>Email</a>
      </span>
    </footer>
  );
}
