import type { Metadata } from "next";
import { PrivacyReceipt } from "@/components/PrivacyReceipt";
import { Section } from "@/components/Section";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "A very small contact page for Brijesh Ramakrishnan.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="about-main contact-main">
      <h1 className="page-title">Contact</h1>
      <p>
        <a href="mailto:brijesh.ramakrishnan@gmail.com">brijesh.ramakrishnan@gmail.com</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/brijesh-ramakrishnan-36756564/">LinkedIn</a>
      </p>
      <Section title="A small privacy receipt">
        <PrivacyReceipt />
      </Section>
    </main>
  );
}
