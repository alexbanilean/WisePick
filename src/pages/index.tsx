import { CustomLayout } from "~/components/CustomLayout";
import { api } from "~/utils/api";

// import { useTheme } from "next-themes";
// import { BackgroundImage } from "~/components/BackgroundImage";
import Image from "next/image";
import lightWisePickBG from "~/../public/lightWisePickBG.jpg";

export default function Home() {
  // const { theme } = useTheme();

  // start fetching ASAP
  api.product.getAll.useQuery();

  // const productsWithImages =
  //   !isLoading && products
  //     ? products.filter((product) => product.image !== null)
  //     : [];
  // const featuredProducts = productsWithImages?.slice(15, 35) ?? [];

  return (
    <CustomLayout>
      {/* TODO fix sync with server for BackgroundImage (SSR) */}
      {/* <BackgroundImage theme={theme} /> */}

      <Image
        src={lightWisePickBG}
        alt="WisePick"
        fill
        className="z-0 h-screen w-screen"
      />

      <div className="z-10 w-full p-10">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
          Welcome to WisePick
        </h1>
        <p className="pb-2 pt-6 text-justify text-gray-800 dark:text-white">
          Empowering you with intelligent insights and expert recommendations,
          WisePick is your go-to app for making informed choices across a
          spectrum of categories.
        </p>
        <p className="py-2 text-justify text-gray-800 dark:text-white">
          Whether you are selecting tech gadgets, planning travel destinations,
          or exploring the latest trends, WisePick is your trusted advisor.
        </p>
        {/* <div className="hidden w-full p-10 sm:flex sm:items-center">
          <Carousel className="w-full max-w-sm">
            <CarouselContent className="-ml-4">
              {featuredProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="flex pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-4">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        {product.image ? (
                          <div
                            style={{
                              width: 200,
                              height: 200,
                              position: "relative",
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src={product.image}
                              alt={product.productName}
                              width={200}
                              height={200}
                              objectFit="contain"
                            />
                          </div>
                        ) : null}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div> */}
      </div>
    </CustomLayout>
  );
}
