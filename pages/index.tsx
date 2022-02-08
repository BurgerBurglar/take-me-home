import { Button, Heading, HStack, Stack } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AnimalList from "../components/AnimalList";
import Filter from "../components/Filter";
import getAnimalList, { getAnimals } from "../fetch/getAnimals";
import { Animal, AnimalParams, Pagination } from "../types/animals";
import useFilter from "../utils/useFilter";

interface Props {
  animals: Animal[];
  pagination: Pagination;
}

const Home: NextPage<Props> = ({ animals, pagination }) => {
  const [allAnimals, setAllAnimals] = useState(animals);
  const initialPage = pagination.current_page;
  const initialTotalPages = pagination.total_pages;
  const [params, setParams] = useState<AnimalParams>({});

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [isFetching, setIsFetching] = useState(false);
  const hasNextPage = totalPages > currentPage;
  const fetchNextPage = async () => {
    if (!hasNextPage) return;
    setIsFetching(true);
    const { animals: moreAnimals, pagination } = await getAnimalList({
      ...params,
      page: currentPage + 1,
    });
    setAllAnimals((prev) => [...prev, ...moreAnimals]);
    setCurrentPage((prev) => prev + 1);
    setTotalPages(pagination.total_pages);
    setIsFetching(false);
  };

  const { filterOne, filterMany } = useFilter({
    params,
    setParams,
    fetcher: getAnimals,
    setter: setAllAnimals,
  });

  return (
    <>
      <Head>
        <title>Pet Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1">Pet Finder</Heading>
      <HStack align="flex-start">
        <Filter params={params} filterOne={filterOne} filterMany={filterMany} />
        <Stack align="center">
          <AnimalList animals={allAnimals} />
          {!hasNextPage ? null : (
            <Button isLoading={isFetching} onClick={fetchNextPage}>
              More
            </Button>
          )}
        </Stack>
      </HStack>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { animals, pagination } = await getAnimalList();
  return {
    props: {
      animals,
      pagination,
    },
  };
};

export default Home;
