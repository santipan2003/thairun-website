import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import AboutPageCard from "./components/about-page-card";

export const AboutPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <AboutPageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default AboutPage;
