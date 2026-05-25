import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        Brijesh Ramakrishnan
      </Link>
      <nav className="nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
