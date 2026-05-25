import { nowItems } from "@/data/site";

export function CurrentFocus() {
  return (
    <ul>
      {nowItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
