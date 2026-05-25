import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact - Brijesh Ramakrishnan",
  description: "A very small contact page for Brijesh Ramakrishnan.",
};

export default function ContactPage() {
  return (
    <div className="site-shell">
      <Header />
      <main className="about-main contact-main">
        <h1 className="page-title">Contact</h1>
        <p>
          I read every note that sounds like it was written by a human. This is a low
          bar, and yet increasingly a differentiator. Email me at{" "}
          <a href="mailto:brijesh.ramakrishnan@gmail.com">
            brijesh.ramakrishnan@gmail.com
          </a>
          .
        </p>
        <p>
          Find me on{" "}
          <a href="https://www.linkedin.com/in/brijesh-ramakrishnan-36756564/">
            LinkedIn
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
