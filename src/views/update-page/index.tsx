import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import ProductPageCard from "./components/product-page-card";

export const UpdatePage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <ProductPageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default UpdatePage;
