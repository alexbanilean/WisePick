import {
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { PageLayout } from "~/components/PageLayout";
import { api } from "~/utils/api";
import { Navbar } from "~/components/Navbar";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });
  // const user = useUser();

  return (
    <>
      <PageLayout>
        <Navbar />

        {/* {user.isSignedIn ? (
            <SignOutButton>
              <span className="mt-16 rounded-md bg-black px-4 py-2 font-semibold text-white dark:bg-white dark:text-black">
                Sign out
              </span>
            </SignOutButton>
          ) : (
            <SignInButton>
              <span className="mt-16 rounded-md bg-black px-4 py-2 font-semibold text-white dark:bg-white dark:text-black">
                Sign in
              </span>
            </SignInButton>
          )}
          <UserButton afterSignOutUrl="/" /> */}
      </PageLayout>
    </>
  );
}
