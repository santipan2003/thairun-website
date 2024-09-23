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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <Heading fontSize={["4xl", "5xl"]}>
              UPDATES
              <span style={{ color: useColorModeValue("#FF9900", "#FF9900") }}>
                {" "}
                GALLERY
              </span>
            </Heading>
          </motion.div>
        </Box>

        {/* Swiper Image Carousel */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {updateData.map((update) => (
            <SwiperSlide key={update.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href={update.path} isExternal>
                  <Image
                    src={update.image}
                    alt={`Image for ${update.id}`}
                    objectFit="cover"
                    boxSize="600px"
                    mx="auto"
                    borderRadius="lg"
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
