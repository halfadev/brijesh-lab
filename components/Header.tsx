export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        Brijesh Ramakrishnan
      </a>
      <nav className="nav site-nav" aria-label="Primary navigation">
        <a href="/writing">Writing</a>
        <a href="/videos">Videos</a>
        <a href="/learn">Learn</a>
        <a href="/lab">Lab</a>
      </nav>
    </header>
  );
}
