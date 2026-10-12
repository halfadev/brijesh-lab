import type { Metadata } from "next";
// Archived from app/design-system during the public IA simplification.

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function DesignSystemLayout({ children }: { children: React.ReactNode }) { return children; }
