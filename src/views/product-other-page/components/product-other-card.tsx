import {
  Box,
  Heading,
  Flex,
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProductOtherPageCard = () => {
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
      width="100%"
    >
      <Box textAlign="center" mb="2rem">
        <Heading fontSize={["4xl", "5xl"]}>
          OTHER
          <span style={{ color: highlightColor }}>
            {" "}
            PRODUCTS VERSION ORIGINAL
          </span>
        </Heading>
      </Box>

      {/* Swiper Image Carousel with Navigation */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enable navigation (arrows)
        modules={[Pagination, Navigation]} // Include Navigation module
        className="mySwiper"
      >
        {products
          .filter((product) => product.id >= 10)
          .map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Box
                  borderRadius="lg"
                  overflow="hidden"
                  bg={cardBgColor}
                  boxShadow="lg"
                  p={5}
                  textAlign="center"
                  transition="transform 0.3s ease"
                  _hover={{
                    transform: "scale(1.02)",
                    boxShadow: "m",
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.product_name}
                    objectFit="cover"
                    mx="auto"
                    mb={4}
                    borderRadius="lg"
                  />

                  {/* Product Name + Header */}
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between" // Ensure button is at the bottom
                    height="100%"
                    minHeight="275px"
                    transition="transform 0.3s ease"
                  >
                    {/* Product Header + Name */}
                    <Box flexGrow={1} textAlign="center">
                      <Heading
                        as="h3"
                        fontSize="xl"
                        fontWeight="bold"
                        mb={2}
                        color={headingColor}
                      >
                        {product.product_name}
                        <span
                          style={{
                            color: "#FF9900",
                            fontWeight: "bold",
                            marginLeft: "8px",
                          }}
                        >
                          {product.product_header}
                        </span>
                      </Heading>

                      {/* Product Description */}
                      <Text
                        fontSize="md"
                        mb={4}
                        textAlign="left"
                        color={textColor}
                      >
                        {product.product_description}
                      </Text>
                    </Box>

                    {/* Read More Button at the bottom */}
                    <Link href={`/products/${product.id}`}>
                      <Button
                        size="md"
                        variant="outline"
                        colorScheme="yellow"
                        borderRadius="full"
                        borderColor={highlightColor}
                        color={highlightColor}
                        px={8}
                        mt="auto" // Ensure button stays at the bottom
                        ml="18rem" // Align button to the right
                      >
                        อ่านต่อ
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </motion.div>
            </SwiperSlide>
          ))}
      </Swiper>
    </Flex>
  );
};

export default ProductOtherPageCard;
