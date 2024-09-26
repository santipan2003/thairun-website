import React, { ReactNode } from "react";
import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useColorModeValue } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "THAIRUN | Website" }: Props) => (
  <Flex direction="column" minH="100vh" overflowX="hidden">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Box position="fixed" top="0" left="0" width="100%" zIndex="1000">
      <Navbar />
    </Box>
    <Box
      bgColor={useColorModeValue("white", "black")}
      flex="1"
      // mt={{ base: "50px", md: "60px" }} // Adjust margin-top based on Navbar height
      pt={{ base: 4, md: 6 }} // Add padding-top to handle small screen sizes
    >
      <Box
        as="main"
        maxW="1550px"
        mx="auto"
        // px={{ base: 4, md: 6, lg: 8 }}
        py={{ base: 4, md: 6 }}
        width="100%"
      >
        {children}
      </Box>
      <Footer />
    </Box>
  </Flex>
);

export default Layout;
