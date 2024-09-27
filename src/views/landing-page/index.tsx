import { NextPage } from "next";
import { Box, Stack } from "@chakra-ui/react";
import Layout from "@/pages/components/Layout";
import LandingPageCard from "./components/landing-page-card";
import AboutPageCard from "../about-page/components/about-page-card";
import ProductPageCard from "../product-page/components/product-page-card";
import UpdatePageCard from "../update-page/components/update-page-card";
import PartnerPageCard from "../partner-page/components/partner-page-card";
import ContactPageCard from "../contact-page/components/contact-page-card";
import SlidePageCard from "../slide-page/components/slide-page-card";
// import ProductOtherPageCard from "../product-other-page/components/product-other-card";
// import TestimonialCarousel from "../about-page/components/about-page-carousel";
// import ProductOtherCarousel from "../product-other-page/components/product-other-carousel";
import ProductOtherPageTable from "../product-other-page/components/product-other-card-table";
import StatPageCard from "../stat-page/components/stat-page-card";

export const LandingPage: NextPage = () => {
  return (
    <Layout>
      <Stack spacing={5} width="100%" overflowX="hidden">
        <Box id="landing" as="section" width="100%" overflowX="hidden">
          <LandingPageCard />
        </Box>
        <Box id="about" as="section" width="100%" overflowX="hidden">
          <AboutPageCard />
        </Box>
        {/* <Box id="team" as="section" width="100%" overflowX="hidden">
          <TestimonialCarousel />
        </Box> */}
        <Box id="team" as="section" width="100%" overflowX="hidden">
          <StatPageCard />
        </Box>
        <Box id="partner" as="section" width="100%" overflowX="hidden">
          <PartnerPageCard />
        </Box>

        <Box id="product" as="section" width="100%" overflowX="hidden">
          <ProductPageCard />
        </Box>
        {/* VERSION 1 */}

        <Box id="other" as="section" width="100%" overflowX="hidden">
          <ProductOtherPageTable />
        </Box>
        {/* VERSION 2 */}

        {/* <Box id="update" as="section" width="100%" overflowX="hidden">
          <ProductOtherCarousel />
        </Box> */}
        {/* VERSION 3 */}

        {/* <Box id="update" as="section" width="100%" overflowX="hidden">
          <ProductOtherPageCard />
        </Box> */}
        <Box id="slide" as="section" width="100%" overflowX="hidden">
          <SlidePageCard />
        </Box>
        <Box id="update" as="section" width="100%" overflowX="hidden">
          <UpdatePageCard />
        </Box>

        <Box id="contact" as="section" width="100%" overflowX="hidden">
          <ContactPageCard />
        </Box>
      </Stack>
    </Layout>
  );
};

export default LandingPage;
