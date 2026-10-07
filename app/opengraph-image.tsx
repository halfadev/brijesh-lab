import { ImageResponse } from "next/og";
import { OgCard } from "@/lib/og";
import { siteName } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteName;

export default function Image() {
  return new ImageResponse(
    (
      <OgCard title={"Part professional archive.\nPart thinking lab."} />
    ),
    size,
  );
}
