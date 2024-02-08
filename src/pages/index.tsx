import { PageLayout } from "~/components/PageLayout";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <PageLayout>
        <NavBar />
        <SideBar />
      </PageLayout>
    </>
  );
}
