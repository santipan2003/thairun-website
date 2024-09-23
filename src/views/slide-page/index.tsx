import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import SlidePageCard from "./components/slide-page-card";

export const ProductPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <SlidePageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default ProductPage;
