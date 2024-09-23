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
      bgColor={useColorModeValue("gray.100", "gray.800")} // Set the background color to gray
      flex="1"
    >
      <Box
        as="main"
        maxW="100%"
        mx="auto"
        width="100%"
        bgColor={useColorModeValue("white", "black")} // Set the background color of the main content
      >
        {children}
      </Box>
      <Footer />
    </Box>
  </Flex>
);

export default Layout;
