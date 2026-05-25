import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brijesh Ramakrishnan",
  description:
    "Personal site of Brijesh Ramakrishnan - enterprise software, pharma supply chain, product thinking, AI, writing, and experiments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
