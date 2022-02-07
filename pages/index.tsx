import { Code, Heading } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import getAnimals from "../fetch/getAnimals";
import { Animal, AnimalList, Pagination } from "../types/animals";

interface Props {
  animals: Animal[];
  pagination: Pagination;
}

const Home: NextPage<Props> = ({ animals, pagination }) => {
  console.log(animals);
  return (
    <>
      <Head>
        <title>Pet Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Hello world!</Heading>
      <pre>{JSON.stringify(animals, null, 2)}</pre>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { animals, pagination } = await getAnimals();
  const animalsWithPhotos = animals.filter(({ photos }) => photos.length > 0);
  return {
    props: {
      animals: animalsWithPhotos,
      pagination,
    },
  };
};

export default Home;
