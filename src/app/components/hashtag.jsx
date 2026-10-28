import { darken, lighten } from "color2k";

export default function HashTag({ text, bgColor }) {
  return (
    <div
      className="inline-block capitalize px-2.5 py-0.5 rounded-2xl text-sm font-medium mr-2"
      style={{
        backgroundColor: lighten(bgColor, 0.1),
        color: darken(bgColor, 0.2),
      }}
    >
      {text}
    </div>
  );
}
