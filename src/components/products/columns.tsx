"use client";

import type { ColumnDef, Row } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "~/components/ui/button";

export type Product = {
  id: string;
  productName: string;
  category: string;
  sellingPrice: string;
  // modelNumber: string;
  // aboutProduct: string;
  // productSpecification: string;
  // technicalDetails: string;
  // shippingWeight: string;
  // productDimensions: string;
  // image: string;
  // variants: string;
  // productUrl: string;
  // isAmazonSeller: string;
};

const TruncatedText = ({
  text,
  maxChars,
}: {
  text: string;
  maxChars: number;
}) => {
  const truncatedText =
    text.length > maxChars ? `${text.slice(0, maxChars)}...` : text;

  return (
    <span className="truncated-text" title={text}>
      {truncatedText}
    </span>
  );
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "productName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const productName: string = row.getValue("productName");

      return (
        <div className="text-left">
          <TruncatedText text={productName} maxChars={50} />
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rawCategory: string = row.getValue("category");

      if (!rawCategory) {
        return <div className="text-left">N/A</div>; // Display N/A for empty categories
      }

      const categories = rawCategory.split("|");
      const firstCategory = categories[0]?.trim() ?? "";
      const lastCategory = categories[categories.length - 1]?.trim() ?? "";

      const formattedCategory = `${firstCategory} | ${lastCategory}`;

      return <div className="text-left">{formattedCategory}</div>;
    },
  },
  {
    accessorKey: "sellingPrice",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    sortingFn: (
      rowA: Row<Product>,
      rowB: Row<Product>,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      columnId: string,
    ): number => {
      const text1: string = rowA.original.sellingPrice ?? "";
      const text2: string = rowB.original.sellingPrice ?? "";

      if (!text1 && !text2) {
        return 0;
      }
      if (!text1 && text2) {
        return 1;
      }

      if (text1 && !text2) {
        return -1;
      }

      const priceA = parseFloat(text1.replace(/[^\d.]/g, "").replace(/,/g, ""));
      const priceB = parseFloat(text2.replace(/[^\d.]/g, "").replace(/,/g, ""));

      return priceA < priceB ? 1 : priceA > priceB ? -1 : 0;
    },
    cell: ({ row }) => {
      const rawPrice: string = row.getValue("sellingPrice");

      if (!rawPrice) {
        return <div className="text-left">N/A</div>; // Display N/A for empty prices
      }

      const numericPart = rawPrice.replace(/[^\d.]/g, ""); // Match only digits and periods
      const price = parseFloat(numericPart.replace(/,/g, "")); // Remove commas and parse as float

      if (isNaN(price)) {
        return <div className="text-left">Invalid Price</div>; // Handle cases where the numeric part is not a valid number
      }

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        // useGrouping: false,
        maximumFractionDigits: 2, // Control the number of digits after the decimal point
      }).format(price);

      return <div className="text-left">{formatted}</div>;
    },
  },
  // {
  //   accessorKey: "modelNumber",
  //   header: "Model Number",
  // },
  // {
  //   accessorKey: "aboutProduct",
  //   header: "About Product",
  // },
  // {
  //   accessorKey: "productSpecification",
  //   header: "Product Specification",
  // },
  // {
  //   accessorKey: "technicalDetails",
  //   header: "Technical Details",
  // },
  // {
  //   accessorKey: "shippingWeight",
  //   header: "Shipping Weight",
  // },
  // {
  //   accessorKey: "productDimensions",
  //   header: "Product Dimensions",
  // },
  // {
  //   accessorKey: "image",
  //   header: "Image",
  // },
  // {
  //   accessorKey: "variants",
  //   header: "Variants",
  // },
  // {
  //   accessorKey: "productUrl",
  //   header: "Product Url",
  // },
  // {
  //   accessorKey: "isAmazonSeller",
  //   header: "Is Amazon Seller",
  // },
];
