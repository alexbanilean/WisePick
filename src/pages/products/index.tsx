import { CustomLayout } from "~/components/CustomLayout";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import { DataTable } from "~/components/products/data-table";
import { type Product, columns } from "~/components/products/columns";
import { api } from "~/utils/api";
import { LoadingSpinner } from "~/components/loading";

const ProductsPage: NextPageWithLayout = () => {
  const { data: products, isLoading } = api.product.getAll.useQuery();
  const tableProducts = products as unknown as Product[];
  const categories =
    !isLoading && tableProducts
      ? Array.from(new Set(tableProducts.map((product) => product.category)))
      : [];

  return (
    <div className="w-full p-10">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
        Products
      </h1>
      {isLoading ? (
        <LoadingSpinner size={20} />
      ) : (
        <DataTable
          columns={columns}
          data={tableProducts}
          categories={categories}
        />
      )}
    </div>
  );
};

ProductsPage.getLayout = function getLayout(page: ReactElement) {
  return <CustomLayout>{page}</CustomLayout>;
};

export default ProductsPage;
