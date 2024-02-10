import { SignUp } from "@clerk/nextjs";
import { HomeHeader } from "~/components/HomeHeader";

export default function SignUpPage() {
  return (
    <div className="m-auto flex flex-col flex-wrap items-center justify-center gap-3 p-6">
      <HomeHeader />
      <SignUp />
    </div>
  );
}
