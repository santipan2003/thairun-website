import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Image,
  SimpleGrid,
  Button,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "@/interfaces";
import { FaRunning } from "react-icons/fa";

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
      <Box textAlign="center" mb="4rem">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <Heading fontSize={["4xl", "5xl"]}>
            PRODUCTS
            <span style={{ color: highlightColor }}> LIST</span>
          </Heading>
        </motion.div>
      </Box>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px" width="100%">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.075 }}
          >
            <Box
              p="4"
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="lg"
              bg={bgColor}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
              minHeight="400px"
              transition="transform 0.3s ease"
            >
              <Image
                src={product.image}
                alt={product.product_name}
                boxSize="200px"
                width="100%"
                height="250px"
                objectFit="cover"
                mb="4"
                mx="auto"
              />
              <Heading
                as="h3"
                fontSize="xl"
                mb="2"
                textAlign="center"
                color={textColor}
              >
                {product.product_name}
                <span style={{ color: highlightColor }}>
                  {" "}
                  {product.product_header}
                </span>
              </Heading>
              <Text color={textColor} mb="4" flex="1">
                {product.product_description}
              </Text>
              <Flex justify="flex-end" mt="auto">
                <Link href={product.path} isExternal>
                  <Button
                    variant="outline"
                    colorScheme="yellow"
                    borderRadius="full"
                    borderColor={highlightColor}
                    color={highlightColor}
                    leftIcon={<FaRunning />}
                  >
                    เข้าสู่เว็บไซต์
                  </Button>
                </Link>
              </Flex>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductPageCard;
