import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/fuzzy-bubbles";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import ParamsProvider from "../context/params";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ParamsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParamsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
