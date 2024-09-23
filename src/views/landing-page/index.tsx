import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import LandingPageCard from "./components/landing-page-card";
import AboutPageCard from "../about-page/components/about-page-card";
import ProductPageCard from "../product-page/components/product-page-card";
import UpdatePageCard from "../update-page/components/update-page-card";
import PartnerPageCard from "../partner-page/components/partner-page-card";
import ContactPageCard from "../contact-page/components/contact-page-card";
// import SlidePageCard from "../slide-page/components/slide-page-card"

export const LandingPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={10} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <LandingPageCard />
        </Box>
        <Box id="about" as="section" width="100%" overflowX="hidden">
          <AboutPageCard />
        </Box>
        <Box id="product" as="section" width="100%" overflowX="hidden">
          <ProductPageCard />
        </Box>
        <Box id="update" as="section" width="100%" overflowX="hidden">
          <UpdatePageCard />
        </Box>
        <Box id="partner" as="section" width="100%" overflowX="hidden">
          <PartnerPageCard />
        </Box>
        <Box id="contact" as="section" width="100%" overflowX="hidden">
          <ContactPageCard />
        </Box>
        {/* <Box id="slide" as="section" width="100%" overflowX="hidden">
          <SlidePageCard />
        </Box> */}
      </Stack>
    </Layout>
  );
};

export default LandingPage;
