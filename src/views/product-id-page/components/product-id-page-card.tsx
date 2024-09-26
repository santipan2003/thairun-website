import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  Image,
  Button,
  Link,
  chakra,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
// import { motion } from "framer-motion";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product } from "@/interfaces";
import { FaRunning, FaCheckCircle } from "react-icons/fa";

const ProductPageCardByID = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query; // Get the id from the route

  // Fetch a product by its ID
  const fetchProductById = async (id: string | string[] | undefined) => {
    try {
      if (!id) return; // Don't fetch if id is undefined
      const response = await axios.get(`/api/products/products-id/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductById(id);
    }
  }, [id]);

  // Color scheme variables
  const highlightColor = useColorModeValue("#FF9900", "#FF9900");
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.300");
  const flexBgColor = useColorModeValue("#edf3f8", "#3e3e3e");

  if (!product) {
    return <chakra.p>Loading...</chakra.p>; // Add a loading state while the data is being fetched
  }

  return (
    <Flex
      bg={flexBgColor}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      {/* Product Detail Heading */}
      <Box textAlign="center" mb="4rem" mt="4rem">
        <Heading fontSize={["4xl", "5xl"]}>
          PRODUCT <span style={{ color: highlightColor }}> DETAIL</span>
        </Heading>
      </Box>

      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={bgColor}
        maxW="2xl"
        transition="transform 0.3s ease"
      >
        <Image
          roundedTop="lg"
          w="full"
          h={64}
          fit="cover"
          src={product.image} // Product image from API
          alt={product.product_name}
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="xs"
              textTransform="uppercase"
              color={highlightColor}
            >
              Product {/* Assuming product category is available */}
            </chakra.span>

            <Heading
              as="h3"
              fontSize="2xl"
              mb="4"
              textAlign="left"
              color={textColor}
            >
              {product.product_name}
              <span style={{ color: highlightColor }}>
                {" "}
                {product.product_header}
              </span>
            </Heading>
            <Text color={textColor} mb="6" flex="1" fontSize="md">
              {product.product_description}
            </Text>

            {/* Features Section - Now as a Bullet Point List */}
            <chakra.h4
              fontSize="lg"
              fontWeight="bold"
              color={highlightColor}
              mb="2"
            >
              Features:
            </chakra.h4>
            <List spacing={2} mb={6}>
              {product.features &&
                product.features.map((feature, index) => (
                  <ListItem key={index} color={secondaryTextColor}>
                    <ListIcon as={FaCheckCircle} color={highlightColor} />
                    {feature}
                  </ListItem>
                ))}
            </List>
          </Box>

          <Box mt={4}>
            <Flex alignItems="center">
              <Flex alignItems="center">
                <Image
                  h={10}
                  fit="cover"
                  rounded="full"
                  src={product.image}
                  alt="Avatar"
                />
                <Link mx={2} fontWeight="bold" color={textColor}>
                  {product.product_name} {product.product_header}
                </Link>
              </Flex>
              <chakra.span mx={1} fontSize="sm" color={secondaryTextColor}>
                25 SEP 2024{" "}
                {/* Use appropriate date from your product data if available */}
              </chakra.span>
            </Flex>
          </Box>

          <Flex justify="center" mt={6}>
            <Link href={product.path} isExternal>
              <Button
                variant="outline"
                colorScheme="yellow"
                borderRadius="full"
                borderColor={highlightColor}
                color={highlightColor}
                leftIcon={<FaRunning />}
              >
                Visit
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductPageCardByID;
