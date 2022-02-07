import { Button, Heading } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import getAnimals from "../fetch/getAnimals";
import { Animal, Pagination } from "../types/animals";

interface Props {
  animals: Animal[];
  pagination: Pagination;
}

const Home: NextPage<Props> = ({ animals, pagination }) => {
  console.log(animals);
  const [allAnimals, setAllAnimals] = useState(animals);
  const [currentPage, setCurrentPage] = useState(pagination.current_page);
  const { total_pages } = pagination;
  const hasNextPage = total_pages > currentPage;

  const [isLoading, setIsLoading] = useState(false);

  const getMoreAnimals = async () => {
    if (!hasNextPage) return;
    setIsLoading(true);
    const moreAnimals = (await getAnimals({ page: currentPage + 1 })).animals;
    setAllAnimals((prev) => [...prev, ...moreAnimals]);
    setCurrentPage((prev) => prev + 1);
    setIsLoading(false);
  };

  return (
    <>
      <Head>
        <title>Pet Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Hello world!</Heading>
      {allAnimals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
      {!hasNextPage ? null : (
        <Button isLoading={isLoading} onClick={getMoreAnimals}>
          More
        </Button>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { animals, pagination } = await getAnimals();
  return {
    props: {
      animals,
      pagination,
    },
  };
};

export default Home;
