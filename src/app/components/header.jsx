import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-304 p-5 flex items-center justify-between mx-auto xl:mt-7 xl:mb-12 xl:px-0">
      <h3>Gabriel Anhaia</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <div className="hidden md:flex items-center gap-4">
        <Link
          className="hover:font-semibold hover:border-b-2 dark:border-white border-black"
          href="/"
        >
          Blog
        </Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/newsteller">Newsteller</Link>
        <div className="flex items-center gap-1 xl:bg-black rounded-3xl px-2 py-1 dark:bg-white">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 xl:text-white dark:text-black cursor-pointer hover:bg-gray-500 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 xl:text-white dark:text-black cursor-pointer hover:bg-gray-500 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
