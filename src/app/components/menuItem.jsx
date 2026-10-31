import Link from "next/link";

export default function MenuItem({ text, href }) {
  return (
    <Link
      className="hover:font-semibold hover:border-b-2 dark:border-white border-black"
      href={href}
    >
      {text}
    </Link>
  );
}
