import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/Layout";
import ParamsProvider from "../context/params";

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

export default MyApp
