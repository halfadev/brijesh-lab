"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type HardLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

export function HardLink({ href, children, ...props }: HardLinkProps) {
  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    if (
      !href.startsWith("/") ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    window.location.assign(href);
  }

  return (
    <a {...props} href={href} onClickCapture={navigate}>
      {children}
    </a>
  );
}
