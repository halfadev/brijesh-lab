import { getNow } from "@/lib/content";

export function CurrentFocus() {
  const { html } = getNow();

  // eslint-disable-next-line react/no-danger -- content is our own markdown, rendered at build time
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
