import type { ReactNode } from "react";
import { HardLink } from "@/components/HardLink";

function classes(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function PageContainer({ children, className, width = "wide" }: { children: ReactNode; className?: string; width?: "article" | "content" | "wide" }) {
  return <div className={classes("ui-page-container", `ui-container-${width}`, className)}>{children}</div>;
}

export function Section({ children, className, labelledBy }: { children: ReactNode; className?: string; labelledBy?: string }) {
  return <section className={classes("ui-section", className)} aria-labelledby={labelledBy}>{children}</section>;
}

export function TwoColumn({ children, className, labelledBy }: { children: ReactNode; className?: string; labelledBy?: string }) {
  return <section className={classes("ui-two-column", className)} aria-labelledby={labelledBy}>{children}</section>;
}

export function HeroLayout({ children, className, labelledBy }: { children: ReactNode; className?: string; labelledBy: string }) {
  return <section className={classes("ui-hero-layout", className)} aria-labelledby={labelledBy}>{children}</section>;
}

export const Hero = HeroLayout;

export function MediaCard({ children, className }: { children: ReactNode; className?: string }) {
  return <figure className={classes("ui-media-card", className)}>{children}</figure>;
}

export function PrimaryButton({ children, href, className }: { children: ReactNode; href: string; className?: string }) {
  return <HardLink className={classes("ui-button", "ui-button-primary", className)} href={href}>{children}</HardLink>;
}

export function SecondaryButton({ children, href, className }: { children: ReactNode; href: string; className?: string }) {
  return <HardLink className={classes("ui-button", "ui-button-secondary", className)} href={href}>{children}</HardLink>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={classes("ui-eyebrow", className)}>{children}</p>;
}

export function FooterRow({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={classes("ui-footer-row", className)}>{children}</div>;
}
