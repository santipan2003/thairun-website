import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import UpdatePageCard from "./components/update-page-card";

export const UpdatePage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <UpdatePageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default UpdatePage;
