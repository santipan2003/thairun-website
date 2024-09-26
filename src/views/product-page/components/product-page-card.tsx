import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Image,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "@/interfaces";
import { FaRunning } from "react-icons/fa";
import Link from "next/link"; // Import Next.js Link

const ProductPageCard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products data
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

  // Move useColorModeValue calls outside of map
  const highlightColor = useColorModeValue("#FF9900", "#FF9900");
  const textColor = useColorModeValue("gray.600", "gray.600");
  const bgColor = useColorModeValue("white", "white");

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
    >
      <Box textAlign="center" mb="2rem">
        {/* Reduced bottom margin */}
        <Heading fontSize={["4xl", "5xl"]}>
          PRODUCTS
          <span style={{ color: highlightColor }}> LIST</span>
        </Heading>
      </Box>

      <SimpleGrid
        columns={{ base: 1, lg: 2, xl: 3 }}
        spacing="40px"
        width="100%"
      >
        {products.slice(0, 9).map((product) => (
          <motion.div
            key={product.id}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.025 }}
          >
            <Box
              p="4"
              bg={bgColor}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              height="100%"
              minHeight="250px"
              transition="transform 0.3s ease"
              borderRadius="lg" // Add rounded corners
              boxShadow="md"
            >
              <Image
                src={product.image}
                alt={product.product_name}
                boxSize="200px"
                width="125px"
                height="250px"
                objectFit="cover"
                mb="4"
                mx="auto"
                borderRadius="lg" // Add rounded corners to the image
              />
              <Flex
                direction="column"
                justifyContent="space-between"
                flex="1"
                ml="4"
                mt="2"
              >
                <Heading
                  as="h3"
                  fontSize="xl"
                  mb="2"
                  textAlign="left"
                  color={textColor}
                >
                  {product.product_name}
                  <span style={{ color: highlightColor }}>
                    {" "}
                    {product.product_header}
                  </span>
                </Heading>
                <Text color={textColor} mb="4" flex="1" fontSize="sm">
                  {product.product_description}
                </Text>
                <Flex justify="flex-end" mt="auto">
                  <Link href={`/products/${product.id}`} passHref>
                    <Button
                      variant="outline"
                      colorScheme="yellow"
                      borderRadius="full"
                      borderColor={highlightColor}
                      color={highlightColor}
                      leftIcon={<FaRunning />}
                      size="sm"
                      mt="-2rem"
                    >
                      อ่านต่อ
                    </Button>
                  </Link>
                </Flex>
              </Flex>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductPageCard;
