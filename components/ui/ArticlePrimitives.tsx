import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/LayoutPrimitives";
import { HardLink } from "@/components/HardLink";

export function ArticleHeader({ eyebrow, title, dek, meta, className }: { eyebrow: string; title: string; dek?: string; meta?: string; className?: string }) {
  return <header className={["ui-article-header", className].filter(Boolean).join(" ")}><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1>{dek ? <p className="ui-article-dek">{dek}</p> : null}{meta ? <p className="ui-article-meta">{meta}</p> : null}</header>;
}

export function ArticleBody({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={["ui-article-body", className].filter(Boolean).join(" ")}>{children}</article>;
}

export function SectionHeading({ children, level = 2 }: { children: ReactNode; level?: 2 | 3 }) {
  return level === 2 ? <h2 className="ui-section-heading">{children}</h2> : <h3 className="ui-section-heading ui-section-heading-small">{children}</h3>;
}

export function KeyConcept({ children, className }: { children: ReactNode; className?: string }) {
  return <aside className={["ui-key-concept", className].filter(Boolean).join(" ")}>{children}</aside>;
}

export function Callout({ title, children, tone = "blue" }: { title?: string; children: ReactNode; tone?: "blue" | "neutral" }) {
  return <aside className={`ui-callout ui-callout-${tone}`}>{title ? <h3>{title}</h3> : null}{children}</aside>;
}

export function ImageCaption({ children }: { children: ReactNode }) {
  return <figcaption className="ui-image-caption">{children}</figcaption>;
}

export const Caption = ImageCaption;

export function InfographicBlock({ src, alt, caption, width = 1600, height = 900, className }: { src: string; alt: string; caption?: ReactNode; width?: number; height?: number; className?: string }) {
  return <figure className={["ui-media-block", "ui-infographic", className].filter(Boolean).join(" ")}><a href={src} target="_blank" rel="noreferrer" aria-label="Open full-size image"><Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 760px) 100vw, 1180px" /></a>{caption ? <ImageCaption>{caption}</ImageCaption> : null}</figure>;
}

export function ImageBlock({ src, alt, caption, width = 1200, height = 800, wide = false }: { src: string; alt: string; caption?: ReactNode; width?: number; height?: number; wide?: boolean }) {
  return <figure className={`ui-media-block ${wide ? "ui-media-wide" : ""}`}><Image src={src} alt={alt} width={width} height={height} sizes={wide ? "(max-width: 760px) 100vw, 1180px" : "(max-width: 760px) 100vw, 720px"} />{caption ? <ImageCaption>{caption}</ImageCaption> : null}</figure>;
}

export function VideoEmbed({ youtubeId, title, caption }: { youtubeId: string; title: string; caption?: ReactNode }) {
  const safeId = /^[A-Za-z0-9_-]{6,20}$/.test(youtubeId) ? youtubeId : "";
  if (!safeId) return <Callout title="Video unavailable">Check the YouTube ID in this entry&apos;s frontmatter.</Callout>;
  return <figure className="ui-media-block ui-video"><div className="ui-video-frame"><iframe src={`https://www.youtube-nocookie.com/embed/${safeId}?rel=0`} title={title} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>{caption ? <ImageCaption>{caption}</ImageCaption> : null}</figure>;
}

export function SourceReferences({ children }: { children: ReactNode }) {
  return <section className="ui-sources"><h2>Sources and references</h2>{children}</section>;
}

export const Sources = SourceReferences;

export function PreviousNext({ previous, next }: { previous?: { href: string; title: string }; next?: { href: string; title: string } }) {
  return <nav className="ui-previous-next" aria-label="Previous and next content"><div>{previous ? <><span>Previous</span><HardLink href={previous.href}>← {previous.title}</HardLink></> : null}</div><div>{next ? <><span>Next</span><HardLink href={next.href}>{next.title} →</HardLink></> : null}</div></nav>;
}

export function NextModule({ eyebrow = "Next module", title, status }: { eyebrow?: string; title: string; status: string }) {
  return <aside className="ui-next-module"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2><p>{status}</p></aside>;
}
