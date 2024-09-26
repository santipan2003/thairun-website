import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import StatPageCard from "./components/stat-page-card";

export const StatPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <StatPageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default StatPage;
