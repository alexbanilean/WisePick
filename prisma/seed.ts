import * as fs from "fs";
import csv from "csv-parser";
import { db } from "~/server/db";

type CsvRow = {
  uniq_id: string;
  product_name: string;
  category: string;
  selling_price?: string;
  model_number?: string;
  about_product?: string;
  product_specification?: string;
  technical_details?: string;
  shipping_weight?: string;
  product_dimensions?: string;
  image?: string;
  variants?: string;
  product_url?: string;
  is_amazon_seller?: string;
};

type ProcessedCsvRow = {
  uniqId: string;
  productName: string;
  category: string;
  sellingPrice?: string;
  modelNumber?: string;
  aboutProduct?: string;
  productSpecification?: string;
  technicalDetails?: string;
  shippingWeight?: string;
  productDimensions?: string;
  image?: string;
  variants?: string;
  productUrl?: string;
  isAmazonSeller?: string;
};

function getData(): Promise<Array<ProcessedCsvRow>> {
  const csvFilePath = new URL("seed_data.csv", import.meta.url);
  const data: Array<ProcessedCsvRow> = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath, "utf-8")
      .on("error", (error) => {
        reject(error);
      })
      .pipe(csv())
      .on("data", (row: CsvRow) => {
        // console.log(row);

        data.push({
          uniqId: row.uniq_id,
          productName: row.product_name,
          category: row.category,
          sellingPrice: row.selling_price ?? "",
          modelNumber: row.model_number ?? "",
          aboutProduct: row.about_product ?? "",
          productSpecification: row.product_specification ?? "",
          technicalDetails: row.technical_details ?? "",
          shippingWeight: row.shipping_weight ?? "",
          productDimensions: row.product_dimensions ?? "",
          image: row.image ?? "",
          variants: row.variants ?? "",
          productUrl: row.product_url ?? "",
          isAmazonSeller: row.is_amazon_seller ?? "",
        });
      })
      .on("end", () => {
        console.log("CSV file successfully processed.");
        resolve(data);
      });
  });
}

async function testGetData(): Promise<Array<ProcessedCsvRow> | undefined> {
  try {
    const data = await getData();
    // console.log("testGetData: parsed CSV data:", data.length);
    return data;
  } catch (error) {
    console.error("testGetData: An error occurred: ", error);
  }
  return undefined;
}

async function main() {
  const clerkId = "user_2c2aAjp5phXETIInYoOfQEWkJFw";
  await db.user.upsert({
    where: {
      clerkId,
    },
    create: {
      clerkId: clerkId,
      email: "alexandru.banilean@gmail.com",
      username: "alexbanilean",
    },
    update: {},
  });

  const data = await testGetData();

  if (!data || data.length === 0) {
    console.error("No data to seed");
    return;
  }

  await db.product.createMany({
    data: data.map((product) => ({
      uniqId: product.uniqId,
      productName: product.productName,
      category: product.category,
      sellingPrice: product.sellingPrice,
      modelNumber: product.modelNumber,
      aboutProduct: product.aboutProduct,
      productSpecification: product.productSpecification,
      technicalDetails: product.technicalDetails,
      shippingWeight: product.shippingWeight,
      productDimensions: product.productDimensions,
      image: product.image,
      variants: product.variants,
      productUrl: product.productUrl,
      isAmazonSeller: product.isAmazonSeller,
    })),
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
