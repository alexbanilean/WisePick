import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useAtom } from "jotai";
import { sidebarOpenAtom } from "../store";

export const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [, setSidebarOpen] = useAtom(sidebarOpenAtom);

  return (
    <nav className="z-20 border-gray-200 bg-blue-600 dark:bg-gray-800">
      <div className="mx-auto flex flex-wrap items-center justify-between p-3">
        <Link
          href="/"
          className="self-center whitespace-nowrap px-2 text-2xl font-semibold text-white"
        >
          WisePick
        </Link>

        <div className="flex items-center gap-2 md:order-2 md:gap-4 md:space-x-0 rtl:space-x-reverse">
          <button
            data-drawer-target="cta-button-sidebar"
            data-drawer-toggle="cta-button-sidebar"
            aria-controls="cta-button-sidebar"
            className="flex items-center rounded-lg p-1 text-sm text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:hidden"
            onClick={() => {
              setSidebarOpen((prev) => !prev);
            }}
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          <button
            id="theme-toggle"
            type="button"
            className="rounded-lg p-1.5 text-sm text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {theme === "light" ? (
              <svg
                id="theme-toggle-dark-icon"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            ) : (
              <svg
                id="theme-toggle-light-icon"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link
              href="/sign-in"
              className="rounded-lg p-2 text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Sign In
            </Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};
