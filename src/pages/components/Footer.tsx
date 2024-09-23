"use client";

import { Box, Text, Flex, useColorModeValue, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bgColor={useColorModeValue("white", "black")}>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Image
            src="https://img2.pic.in.th/pic/analytics_921591.png"
            alt="Logo"
            boxSize="50px"
          />
        </Flex>
        <Text pt={10} fontSize={"sm"} textAlign={"center"}>
          Copyright © 2020 Thaidotrun Co., Ltd.
        </Text>
      </Box>
    </Box>
  );
}
