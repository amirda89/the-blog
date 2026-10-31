import Link from "next/link";
import MenuItem from "./menuItem";
export default function Footer() {
  return (
    <footer className="max-w-304 mx-auto text-center py-7 md:flex items-center gap-3 px-8 xl:px-0">
      <div className="flex flex-col gap-3 md:flex-row">
        <MenuItem text="Twitter" href="" />
        <MenuItem text="LinkedIn" href="" />
        <MenuItem text="Email" href="" />
        <MenuItem text="RSS feed" href="" />
        <MenuItem text="Add to Feedly" href="" />
      </div>
      <p className="mt-4 md:m-0 md:order-first">&copy; 2023</p>
    </footer>
  );
}
