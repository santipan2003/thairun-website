import {
  Box,
  Heading,
  Flex,
  useColorModeValue,
  Image,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Update } from "@/interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

const UpdatePageCard = () => {
  const [updateData, setUpdateData] = useState<Update[]>([]); // Define state with Update type

  const fetchUpdates = async () => {
    try {
      const response = await axios.get("/api/update");
      setUpdateData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  return (
    <>
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
          <Heading fontSize={["4xl", "5xl"]}>
            UPDATES
            <span style={{ color: useColorModeValue("#FF9900", "#FF9900") }}>
              {" "}
              GALLERY
            </span>
          </Heading>
        </Box>

        {/* Swiper Image Carousel */}
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            // when window width is >= 320px (Mobile screens)
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 768px (Tablet screens)
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px (Desktop screens)
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {updateData.map((update) => (
            <SwiperSlide key={update.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Link href={update.path} isExternal>
                  <Image
                    src={update.image}
                    alt={`Image for ${update.id}`}
                    objectFit="cover"
                    boxSize="600px"
                    mx="auto"
                    cursor="pointer"
                    boxShadow="lg"
                    transition="transform 0.3s ease"
                  />
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </>
  );
};

export default UpdatePageCard;
