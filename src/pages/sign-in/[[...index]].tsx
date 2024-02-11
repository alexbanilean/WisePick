import { SignIn } from "@clerk/nextjs";
import { HomeHeader } from "~/components/HomeHeader";

export default function SignInPage() {
  return (
    <div className="m-auto my-3 flex flex-col flex-wrap items-center justify-center gap-3">
      <HomeHeader />
      <SignIn />
    </div>
  );
}
