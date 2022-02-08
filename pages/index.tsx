import { Button, Heading, HStack, Stack } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import AnimalList from "../components/AnimalList";
import Filter from "../components/Filter";
import getAnimals from "../fetch/getAnimals";
import { Animal, AnimalParams, Pagination } from "../types/animals";

interface Props {
  animals: Animal[];
  pagination: Pagination;
}

const Home: NextPage<Props> = ({ animals, pagination }) => {
  const [allAnimals, setAllAnimals] = useState(animals);
  const [currentPage, setCurrentPage] = useState(pagination.current_page);
  const [isLoading, setIsLoading] = useState(false);

  const [params, setParams] = useState<AnimalParams>({});
  useEffect(() => {
    (async () => {
      const { animals } = await getAnimals(params);
      setAllAnimals(animals);
    })();
  }, [params]);

  const { total_pages } = pagination;
  const hasNextPage = total_pages > currentPage;

  const getMoreAnimals = async () => {
    if (!hasNextPage) return;
    setIsLoading(true);
    const moreAnimals = (await getAnimals({ ...params, page: currentPage + 1 }))
      .animals;
    setAllAnimals((prev) => [...prev, ...moreAnimals]);
    setCurrentPage((prev) => prev + 1);
    setIsLoading(false);
  };

  const handleChange = (value: string, field: string) => {
    setParams((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Head>
        <title>Pet Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1">Pet Finder</Heading>
      <HStack align="flex-start">
        <Filter params={params} handleChange={handleChange} />
        <Stack align="center">
          <AnimalList animals={allAnimals} />
          {!hasNextPage ? null : (
            <Button isLoading={isLoading} onClick={getMoreAnimals}>
              More
            </Button>
          )}
        </Stack>
      </HStack>
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
