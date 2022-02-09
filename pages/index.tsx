import { Button, HStack, useBreakpointValue, VStack } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AnimalGrid from "../components/AnimalGrid";
import Filter from "../components/Filter";
import { useParams } from "../context/params";
import getAnimalList, { getAnimals } from "../fetch/getAnimals";
import { Animal, Pagination } from "../types/animals";
import useFilter from "../utils/useFilter";
import useLargeScreen from "../utils/useLargeScreen";

interface Props {
  animals: Animal[];
  pagination: Pagination;
}

const Home: NextPage<Props> = ({ animals, pagination }) => {
  const isLargeScreen = useLargeScreen();

  const { params, setParams } = useParams();

  const [allAnimals, setAllAnimals] = useState(animals);
  const initialPage = pagination.current_page;
  const initialTotalPages = pagination.total_pages;

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
      <HStack align="flex-start">
        {!isLargeScreen ? null : (
          <Filter
            params={params}
            filterOne={filterOne}
            filterMany={filterMany}
          />
        )}
        <VStack w="full">
          <AnimalGrid animals={allAnimals} />
          {!hasNextPage ? null : (
            <Button isLoading={isFetching} onClick={fetchNextPage}>
              More
            </Button>
          )}
        </VStack>
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
