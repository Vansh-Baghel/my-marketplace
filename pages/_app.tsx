import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from 'react';

type AppPropsWithChildren = AppProps & {
  Component: React.ComponentType<AppProps['pageProps']>;
  children: ReactNode;
};

function App({ Component, pageProps }: AppPropsWithChildren) {
  return (
    <MeshProvider>
      <Head>
        <title>Marketplace Starter by Mesh SDK</title>
        <meta name="description" content="Marketplace Starter by Mesh SDK" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://meshjs.dev/favicon/favicon-32x32.png" />
      </Head>
      <Navbar />
      {/* Ensure that Component is a valid JSX element */}
      {React.isValidElement(Component) ? (
        <Component {...pageProps} />
      ) : null}
      <Footer />
    </MeshProvider>
  );
}

export default App;
