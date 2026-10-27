export default function HashTag({ text, bgColor, textColor }) {
  return (
    <div
      className="inline-block capitalize px-2.5 py-0.5 rounded-2xl text-sm font-medium mr-2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {text}
    </div>
  );
}
