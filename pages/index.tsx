import { Heading } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import AnimalCard from "../components/AnimalCard";
import getAnimals from "../fetch/getAnimals";
import { Animal, Pagination } from "../types/animals";

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
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { animals, pagination } = await getAnimals();
  const animalsWithPhotos = animals.filter(
    ({ primary_photo_cropped }) => primary_photo_cropped !== null
  );
  return {
    props: {
      animals: animalsWithPhotos,
      pagination,
    },
  };
};

export default Home;
