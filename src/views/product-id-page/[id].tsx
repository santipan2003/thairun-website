import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import ProductPageCardByID from "./components/product-id-page-card";

export const ProductPageByID: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <ProductPageCardByID />
        </Box>
      </Stack>
    </Layout>
  );
};

export default ProductPageByID;
