import {
  Box,
  Heading,
  Flex,
  Grid,
  useColorModeValue,
  Image,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { OtherProduct } from "@/interfaces";

const ProductOtherPageTable = () => {
  const [products, setProducts] = useState<OtherProduct[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const highlightColor = useColorModeValue("#FF9900", "#FF9900");
  const cardBgColor = useColorModeValue("white", "white");
  const headingColor = useColorModeValue("gray.600", "black");
  const textColor = useColorModeValue("gray.600", "gray.600");

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      zIndex="1"
      position="relative"
      px={["1rem", "4rem"]}
      py="4rem"
      width="100%"
      mt="-4rem"
    >
      <Box textAlign="center" mb="2rem">
        <Heading fontSize={["4xl", "5xl"]}>
          OTHER
          <span style={{ color: highlightColor }}> PRODUCTS V.1</span>
        </Heading>
      </Box>

      <Grid
        templateColumns={[
          "repeat(1, 1fr)", // Single column for mobile
          "repeat(2, 1fr)", // Two columns for small tablets
          "repeat(4, 1fr)", // Four columns for larger screens
          "repeat(5, 1fr)",
          "repeat(6, 1fr)",
          "repeat(7, 1fr)",
        ]}
        gap={6} // Spacing between cards
        width="100%"
        justifyContent="center" // Ensures centering of items
      >
        {products
          .filter((product) => product.id >= 10)
          .map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              style={{ display: "flex", justifyContent: "center" }} // Center the card
            >
              <Box
                borderRadius="lg"
                overflow="hidden"
                bg={cardBgColor}
                boxShadow="md"
                p={3} // Padding inside the card
                textAlign="center"
                transition="transform 0.3s ease"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "lg",
                }}
                w="100%" // Full width for grid cells
                mx="auto"
                maxW="300px" // Set a max width to control size on large screens
              >
                <Image
                  src={product.image}
                  alt={product.product_name}
                  objectFit="cover"
                  mx="auto"
                  mb={2}
                  borderRadius="lg"
                  h="125px" // Adjusted image height for smaller cards
                />

                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                  minHeight="100px"
                  transition="transform 0.3s ease"
                >
                  <Box flexGrow={1} textAlign="center">
                    <Heading
                      as="h3"
                      fontSize="sm" // Smaller font size
                      fontWeight="bold"
                      mb={1}
                      color={headingColor}
                    >
                      {product.product_name}
                      <span
                        style={{
                          color: highlightColor,
                          fontWeight: "bold",
                          marginLeft: "4px",
                        }}
                      >
                        {product.product_header}
                      </span>
                    </Heading>

                    <Text
                      fontSize="xs"
                      mb={2}
                      textAlign="left"
                      color={textColor}
                      noOfLines={2} // Limit the description to two lines
                    >
                      {product.product_description}
                    </Text>
                  </Box>

                  <Link href={`/products/${product.id}`}>
                    <Button
                      size="xs" // Smaller button size
                      variant="outline"
                      colorScheme="yellow"
                      borderRadius="full"
                      borderColor={highlightColor}
                      color={highlightColor}
                      px={3}
                      mt="auto"
                      ml="auto"
                    >
                      อ่านต่อ
                    </Button>
                  </Link>
                </Box>
              </Box>
            </motion.div>
          ))}
      </Grid>
    </Flex>
  );
};

export default ProductOtherPageTable;
