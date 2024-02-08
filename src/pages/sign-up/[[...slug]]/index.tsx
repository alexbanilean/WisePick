import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="full-w m-auto flex flex-col flex-wrap items-center justify-center gap-2 p-6">
      <Link
        href="/"
        className="self-center whitespace-nowrap rounded-lg p-2 text-3xl font-bold text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
      >
        WisePick
      </Link>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
