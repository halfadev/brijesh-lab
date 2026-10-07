import { author } from "./site-config";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Plain composition shared by every generated OG image: title in large type,
 * author name small underneath, flat site background. No photos, no gradients.
 */
export function OgCard({ title }: { title: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#faf9f6",
        color: "#1f2933",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "pre-wrap",
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#5d6a75" }}>{author}</div>
    </div>
  );
}
