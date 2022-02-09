import { Stack } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Contact from "../../components/details/Contact";
import Intro from "../../components/details/Intro";
import NextImage from "../../components/NextImage";
import getAnimal from "../../fetch/getAnimal";
import getOrganization from "../../fetch/getOrganization";
import { Animal } from "../../types/animals";
import { Organization } from "../../types/Organization";
import defaultPic from "../../utils/defaultPic";

interface Props {
  animal: Animal;
  organization: Organization;
}
const Animal: NextPage<Props> = ({ animal, organization }) => {
  return (
    <>
      <Head>
        <title>{animal.name} - Take Me Home</title>
      </Head>
      <Stack spacing={5}>
        <Stack
          direction="row"
          spacing={5}
          justify="center"
          align="center"
          bg="purple.50"
        >
          <NextImage
            priority
            src={animal.photos[0]?.full ?? defaultPic(animal)}
            alt={animal.name}
            width="full"
            height="500px"
            chakraProps={{
              maxW: "800px",
            }}
          />
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          align="start"
          spacing={5}
          px={3}
        >
          <Intro animal={animal} flex={{ base: undefined, md: "3 3 60rem" }} />
          <Contact
            organization={organization}
            w="full"
            flex={{ base: undefined, md: "1 1 25rem" }}
          />
        </Stack>
      </Stack>
    </>
  );
};
export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  try {
    const animal = await getAnimal(parseInt(params?.id as string));
    const organization = await getOrganization(animal.organization_id);
    return { props: { animal, organization } };
  } catch (err) {
    console.error(err);
    return { notFound: true };
  }
};
export default Animal;
