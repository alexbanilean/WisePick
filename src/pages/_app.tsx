import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Provider } from "jotai";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
      <ClerkProvider {...pageProps}>
        <Head>
          <title>WisePick</title>
          <meta name="description" content="Pick your products wise" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Provider>
          {getLayout(
          <Component {...pageProps} />)}
        </Provider>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
