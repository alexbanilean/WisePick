import { CustomLayout } from "~/components/CustomLayout";
import { api } from "~/utils/api";

export default function Home() {
  // start fetching ASAP
  api.product.getAll.useQuery();

  return (
    <CustomLayout>
      <div>Hello from home</div>
      {/* Here add general products and other info*/}
    </CustomLayout>
  );
}
