import { Button, Heading, HStack, Stack } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AnimalList from "../components/AnimalList";
import Filter from "../components/Filter";
import getAnimalList, { getAnimals } from "../fetch/getAnimals";
import { Animal, AnimalParams, Pagination } from "../types/animals";
import useFilter from "../utils/useFilter";
import usePagination from "../utils/usePagination";

interface Props {
  animals: Animal[];
  pagination: Pagination;
}

const Home: NextPage<Props> = ({ animals, pagination }) => {
  const [allAnimals, setAllAnimals] = useState(animals);
  const initialPage = pagination.current_page;
  const totalPages = pagination.total_pages;
  const [params, setParams] = useState<AnimalParams>({});

  const { isFetching, hasNextPage, fetchNextPage } = usePagination<
    AnimalParams,
    Animal
  >({
    params,
    initialPage,
    totalPages,
    fetcher: getAnimals,
    setter: setAllAnimals,
  });
  const { filter } = useFilter({
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
        <Filter params={params} filter={filter} />
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
