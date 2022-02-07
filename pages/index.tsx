import { Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pet Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Hello world!</Heading>
    </>
  );
};

export default Home;
