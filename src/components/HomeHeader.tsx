import Link from "next/link";

export const HomeHeader = () => {
  return (
    <div className="m-auto flex items-center justify-center gap-3">
      <div className="absolute left-4">
        <Link href="/">
          <svg
            className="h-10 w-10 rounded-lg p-2 font-bold text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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
              d="M5 12h14M5 12l4-4m-4 4 4 4"
            />
          </svg>
        </Link>
      </div>
      <span className="whitespace-nowrap rounded-lg text-2xl font-bold text-blue-600 dark:text-white">
        WisePick
      </span>
    </div>
  );
};
