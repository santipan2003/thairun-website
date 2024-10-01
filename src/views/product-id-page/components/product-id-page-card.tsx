import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  Image,
  Link,
  chakra,
  Text,
  List,
  ListItem,
  ListIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Product } from "@/interfaces";

const ProductPageCardByID: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [otherProduct, setOtherProduct] = useState<Product[]>([]);
  const router = useRouter();
  const { id } = router.query; // Get the id from the route

  // Fetch a product by its ID
  const fetchProductById = async (id: number) => {
    try {
      if (!id) return;
      const response = await axios.get(`/api/products/products-id/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductById(Number(id));
    }
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/products/`);
      setOtherProduct(response.data);
    } catch (error) {
      console.error("Error fetching other product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const highlightColor = useColorModeValue("#FF9900", "#FF9900");
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const secondaryTextColor = useColorModeValue("gray.500", "gray.400");

  if (!product) {
    return <chakra.p>Loading...</chakra.p>;
  }

  return (
    <Flex alignItems="center" justifyContent="center" minH="100vh" bg={bgColor}>
      <Box maxW="6xl" py={8} w="full" px={5}>
        {/* Breadcrumb Section */}
        <Breadcrumb spacing="8px" separator={<FaHome color="gray.500" />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Product Details</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex direction={["column", "column", "row"]} mt={10}>
          {/* Blog Content Section */}
          <Box flex="3" pr={[0, 0, 5]}>
            <Box mb={8}>
              <Heading fontSize={["3xl", "4xl"]}>
                PRODUCT <span style={{ color: highlightColor }}>DETAIL</span>
              </Heading>

              {/* Product Image */}
              <Box mt={6} roundedTop="lg" w="full" h="50vh" overflow="hidden">
                <Image
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  src={product.image}
                  alt={product.product_name}
                />
              </Box>

              <Text mt={4} color={textColor}>
                {product.product_description}
              </Text>

              {/* Features Section */}
              <chakra.h4
                fontSize="lg"
                fontWeight="bold"
                color={highlightColor}
                mt={6}
                mb={4}
              >
                Features:
              </chakra.h4>

              <List spacing={4} mb={8}>
                {product.features &&
                  product.features.map((feature, index) => (
                    <ListItem
                      key={index}
                      color={secondaryTextColor}
                      fontSize="md"
                    >
                      <ListIcon as={FaCheckCircle} color={highlightColor} />
                      {feature}
                    </ListItem>
                  ))}
              </List>

              <Flex alignItems="center" mt={8}>
                <Avatar
                  h={10}
                  w={10}
                  objectFit="cover"
                  rounded="full"
                  src={product.image}
                />
                <Link mx={2} fontWeight="bold" color={textColor}>
                  {product.product_name}
                </Link>
                <chakra.span ml={2} fontSize="sm" color={secondaryTextColor}>
                  25 SEP 2024
                </chakra.span>
              </Flex>
            </Box>
          </Box>

          {/* Sidebar Other Products Section */}
          <Box
            flex="1"
            mt={[10, 10, 0]}
            bg={bgColor}
            p={5}
            rounded="lg"
            shadow="md"
          >
            <Heading fontSize="lg" mb={6}>
              OTHER <span style={{ color: highlightColor }}>PRODUCTS</span>
            </Heading>
            <List spacing={4}>
              {otherProduct
                .filter((item) => item.id !== Number(id))
                .map((item, index) => (
                  <React.Fragment key={item.id}>
                    <Flex alignItems="center" mb={4}>
                      <Avatar
                        src={item.image} // Assuming `item.image` is the image URL
                        name={item.product_name}
                        size="lg" // Larger size for the avatar
                        mr={4}
                      />
                      <Box>
                        <Link href={`/products/${item.id}`}>
                          <Text fontWeight="bold" color={textColor}>
                            {item.product_name}
                          </Text>
                        </Link>
                        <chakra.span fontSize="sm" color={secondaryTextColor}>
                          {item.product_header}
                        </chakra.span>
                      </Box>
                    </Flex>
                    {index < otherProduct.length - 1 && <Divider my={4} />}{" "}
                    {/* Divider between items */}
                  </React.Fragment>
                ))}
            </List>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductPageCardByID;
