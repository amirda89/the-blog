import Link from "next/link";
export default function PageNumber({ number, href, isActive }) {
  return (
    <Link
      className={`w-10 h-10 flex items-center justify-center gap-2 rounded-xl transition-colors ${
        isActive
          ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
          : "hover:bg-gray-200 dark:hover:bg-gray-800"
      }`}
      href={href}
    >
      {number}
    </Link>
  );
}
