import Link from "next/link";
export default function Footer() {
  return (
    <footer className="max-w-304 mx-auto text-center py-7 md:flex items-center gap-3 px-8 xl:px-0">
      <div className="flex flex-col gap-3 md:flex-row">
        <Link href="">Twitter</Link>
        <Link href="">LinkedIn</Link>
        <Link href="">Email</Link>
        <Link href="">RSS feed</Link>
        <Link href="">Add to Feedly</Link>
      </div>
      <p className="mt-4 md:m-0 md:order-first">&copy; 2023</p>
    </footer>
  );
}
