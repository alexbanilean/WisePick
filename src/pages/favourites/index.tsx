import { CustomLayout } from "~/components/CustomLayout";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";

const FavouritesPage: NextPageWithLayout = () => {
  return <div>Hello from favourites</div>;
};

FavouritesPage.getLayout = function getLayout(page: ReactElement) {
  return <CustomLayout>{page}</CustomLayout>;
};

export default FavouritesPage;
