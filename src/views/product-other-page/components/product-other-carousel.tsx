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
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

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
  const bgColor = useColorModeValue("white", "black"); // Set background color based on color mode
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
      px={["1rem", "2rem", "4rem"]} // Responsive padding for different screen sizes
      width="100%"
      bg={bgColor}
    >
      <Box textAlign="center" mb="2rem">
        <Heading fontSize={["3xl", "4xl", "5xl"]}>
          OTHER
          <span style={{ color: highlightColor }}> PRODUCTS V.2</span>
        </Heading>
      </Box>

      <Swiper
        direction="vertical" // Set direction to vertical for up/down scrolling
        slidesPerView={1} // Show 1 row per view
        spaceBetween={30} // Space between rows of cards
        pagination={{
          clickable: true,
        }}
        mousewheel={true} // Enable mouse wheel for smooth vertical scroll
        autoplay={{
          delay: 10000, // Auto-scroll every 10 seconds
          disableOnInteraction: false, // Keeps autoplay running even after user interacts
        }}
        modules={[Mousewheel, Pagination, Autoplay]} // Use Autoplay module for auto-scroll
        className="mySwiper"
        style={{ height: "500px", width: "100%" }} // Adjust height for vertical layout
      >
        {products
          .filter((product) => product.id >= 10)
          .reduce<OtherProduct[][]>((rows, product, index) => {
            if (index % 4 === 0) rows.push([product]);
            else rows[rows.length - 1].push(product);
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <SwiperSlide key={rowIndex}>
              <Flex
                justifyContent={["flex-start", "flex-start", "center"]} // Align left on mobile, center on larger screens
                gap={["6px", "8px", "12px"]}
                flexWrap="wrap"
              >
                {row.map((product) => (
                  <motion.div key={product.id}>
                    <Box
                      borderRadius="lg"
                      overflow="hidden"
                      bg={cardBgColor}
                      boxShadow="lg"
                      p={[2, 3, 4]} // Responsive padding for different screen sizes
                      textAlign="center"
                      transition="transform 0.3s ease"
                      _hover={{
                        transform: "scale(1.02)",
                        boxShadow: "m",
                      }}
                      w={["150px", "200px", "300px"]} // Responsive width
                      mx="auto"
                    >
                      <Image
                        src={product.image}
                        alt={product.product_name}
                        objectFit="cover"
                        mx="auto"
                        mb={2}
                        borderRadius="lg"
                        h={["80px", "120px", "150px"]} // Responsive height for image
                      />

                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                        minHeight={["100px", "175px"]} // Responsive height for content box
                        transition="transform 0.3s ease"
                      >
                        <Box flexGrow={1} textAlign="center">
                          <Heading
                            as="h3"
                            fontSize={["sm", "md"]} // Responsive font size
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
                            fontSize={["xs", "sm"]} // Responsive font size
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
                            size="sm" // Smaller button size
                            variant="outline"
                            colorScheme="yellow"
                            borderRadius="full"
                            borderColor={highlightColor}
                            color={highlightColor}
                            px={4}
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
              </Flex>
            </SwiperSlide>
          ))}
      </Swiper>
    </Flex>
  );
};

export default ProductOtherPageCard;
