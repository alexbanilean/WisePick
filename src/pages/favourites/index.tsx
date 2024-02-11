import { CustomLayout } from "~/components/CustomLayout";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";

const FavouritesPage: NextPageWithLayout = () => {
  return (
    <div className="w-full p-10">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
        Favourites
      </h1>
    </div>
  );
};

FavouritesPage.getLayout = function getLayout(page: ReactElement) {
  return <CustomLayout>{page}</CustomLayout>;
};

export default FavouritesPage;
