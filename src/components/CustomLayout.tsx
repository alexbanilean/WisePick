import { NavBar } from "./NavBar";
import { PageLayout } from "./PageLayout";
import { SideBar } from "./SideBar";

export const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout>
      <NavBar />
      <div className="z-10 flex overflow-auto">
        <SideBar />
        {children}
      </div>
    </PageLayout>
  );
};
