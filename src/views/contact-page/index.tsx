import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import ContactPageCard from "./components/contact-page-card";

export const ContactPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <ContactPageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default ContactPage;
