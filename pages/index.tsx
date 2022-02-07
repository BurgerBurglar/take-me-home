import { Button, Heading } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
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

  const getMoreAnimals = async () => {
    if (!hasNextPage) return;
    const moreAnimals = (await getAnimals({ page: currentPage + 1 })).animals;
    setAllAnimals((prev) => [...prev, ...moreAnimals]);
    setCurrentPage((prev) => prev + 1);
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
      {hasNextPage ? <Button onClick={getMoreAnimals}>More</Button> : null}
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
