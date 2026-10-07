import { HardLink } from "@/components/HardLink";

export function Header() {
  return (
    <header className="site-header">
      <HardLink className="brand" href="/">
        Brijesh Ramakrishnan
      </HardLink>
      <nav className="nav site-nav" aria-label="Primary navigation">
        <HardLink href="/writing">Writing</HardLink>
        <HardLink href="/videos">Videos</HardLink>
        <HardLink href="/learn">Learn</HardLink>
        <HardLink href="/lab">Lab</HardLink>
      </nav>
    </header>
  );
}
