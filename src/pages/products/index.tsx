import { CustomLayout } from "~/components/CustomLayout";
import type { NextPageWithLayout } from "../_app";
import type { ReactElement } from "react";
import { DataTable } from "~/components/products/data-table";
import { type Product, columns } from "~/components/products/columns";
import { api } from "~/utils/api";

const ProductsPage: NextPageWithLayout = () => {
  const { data: products, isLoading } = api.product.getAll.useQuery();
  const tableProducts = products as unknown as Product[];
  const categories =
    !isLoading && tableProducts
      ? Array.from(new Set(tableProducts.map((product) => product.category)))
      : [];

  return (
    <div className="w-full p-10">
      {isLoading ? (
        <div>Loading...</div>
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
