"use client";

import { useEffect, useRef, useState } from "react";
import { HardLink } from "@/components/HardLink";
import { linkedinUrl, youtubeUrl } from "@/lib/site-config";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function dismissOnOutsidePress(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", dismissOnOutsidePress);
    document.addEventListener("keydown", dismissOnEscape);

    return () => {
      document.removeEventListener("pointerdown", dismissOnOutsidePress);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, []);

  return (
    <header className="site-header">
      <HardLink className="brand" href="/">
        <span className="brand-full">Brijesh Ramakrishnan</span>
        <span className="brand-mobile">Brijesh R.</span>
      </HardLink>
      <nav className="nav site-nav" aria-label="Primary navigation">
        <HardLink href="/learn">Learn</HardLink>
        <HardLink href="/lab">Lab</HardLink>
        <HardLink className="nav-contact" href="/contact">
          Contact
        </HardLink>
        <div className="mobile-menu" ref={menuRef}>
          <button
            ref={menuButtonRef}
            className="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setMenuOpen((open) => !open)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setMenuOpen((open) => !open);
              }
            }}
          >
            <span className="mobile-menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          {menuOpen ? (
            <div className="mobile-menu-panel" id="mobile-navigation-menu">
              <HardLink href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </HardLink>
              <a href={linkedinUrl} onClick={() => setMenuOpen(false)}>
                LinkedIn
              </a>
              <a href={youtubeUrl} onClick={() => setMenuOpen(false)}>
                YouTube
              </a>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
