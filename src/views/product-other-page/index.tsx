import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import ProductOtherPageCard from "./components/product-other-card";

export const ProductOtherPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <ProductOtherPageCard />
        </Box>
        
      </Stack>
    </Layout>
  );
};

export default ProductOtherPage;
