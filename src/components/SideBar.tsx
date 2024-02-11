import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { sidebarOpenAtom } from "~/store";
import useWindowWidth from "~/utils/useWindowWidth";

export const SideBar = () => {
  const { signOut } = useClerk();
  const router = useRouter();
  const windowWidth = useWindowWidth();
  const [sidebarOpen, setSidebarOpen] = useAtom(sidebarOpenAtom);

  useEffect(() => {
    if (windowWidth > 640) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, [windowWidth, setSidebarOpen]);

  return (
    <>
      <div
        id="cta-button-sidebar"
        className={`${sidebarOpen ? "visible translate-x-0" : "invisible -translate-x-full"} absolute flex h-screen w-48 flex-col transition-all duration-300 ease-in-out sm:relative`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-300 px-3 py-3 dark:bg-gray-600">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="group flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ms-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="group flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="ms-3 flex-1 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <SignedOut>
              <li>
                <Link
                  href="/sign-in"
                  className="group flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Sign In</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/sign-up"
                  className="group flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="ms-3 flex-1 whitespace-nowrap">Sign Up</span>
                </Link>
              </li>
            </SignedOut>
            <SignedIn>
              <li>
                <Link
                  href="/favourites"
                  className="group flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                  </svg>

                  <span className="ms-3 flex-1 whitespace-nowrap">
                    My Favourites
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/user-profile"
                  className="group flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span className="ms-3 flex-1 whitespace-nowrap">Profile</span>
                </Link>
              </li>
              <li>
                <button
                  className="group flex items-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  style={{ width: "168px" }}
                  onClick={() => signOut(() => router.push("/"))}
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                    />
                  </svg>
                  <span className="ms-3 whitespace-nowrap">Sign Out</span>
                </button>
              </li>
            </SignedIn>
          </ul>
        </div>
      </div>
    </>
  );
};
