import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import PartnerPageCard from "./components/partner-page-card";

export const PartnerPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <PartnerPageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default PartnerPage;
