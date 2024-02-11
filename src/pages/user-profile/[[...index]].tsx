import { UserProfile } from "@clerk/nextjs";
import { HomeHeader } from "~/components/HomeHeader";

const UserProfilePage = () => {
  return (
    <div className="m-auto my-3 flex flex-col flex-wrap items-center justify-center gap-3">
      <HomeHeader />
      <UserProfile path="/user-profile" routing="path" />
    </div>
  );
};

export default UserProfilePage;
