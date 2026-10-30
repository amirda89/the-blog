export default function Heading({ text, style }) {
  return (
    <h1
      className="text-[#1a1a1a] font-semibold text-2xl max-w-304 mx-auto mt-12 mb-8 px-8 xl:p-0 dark:text-white"
      style={style}
    >
      {text}
    </h1>
  );
}
