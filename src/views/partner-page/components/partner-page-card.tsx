import { Box, Heading, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Partner } from "@/interfaces";

const PartnerPageCard = () => {
  const [partners, setPartners] = useState<Partner[]>([]); // Define state with Partner type

  const fetchPartners = async () => {
    try {
      const response = await axios.get("/api/partners");
      setPartners(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  // Filter partners into Clients and Partners categories
  const clients = partners.filter((partner) => partner.category === "Clients");
  const otherPartners = partners.filter(
    (partner) => partner.category === "Partners"
  );

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      zIndex="1"
      position="relative"
      px={["1rem", "2rem", "4rem"]} // Adjust padding for different screen sizes
      py="4rem"
      width="100%"
    >
      {/* Clients Section */}
      <Box textAlign="center" mb="4rem" width="100%">
        <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]} mt="-4rem" mb="2rem">
          OUR <span style={{ color: "#FF9900" }}>CLIENTS</span>
        </Heading>

        <SimpleGrid
          columns={[5, 6, 8, 12]} // 2 columns on small screens, 12 columns on large screens
          gap={["5px", "8px", "10px"]} // Adjust the gap for different screen sizes
          width="100%"
        >
          {clients.map((client) => (
            <motion.div key={client.id} whileHover={{ scale: 1.075 }}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Image
                  src={client.image}
                  alt={`Logo of ${client.category}`}
                  objectFit="contain"
                  width="100%" // Ensure full width of the grid cell
                  height={["60px", "70px", "80px"]} // Adjust the height for responsive design
                  mx="auto"
                />
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>

      {/* Partners Section */}
      <Box textAlign="center" mb="-4rem" width="100%">
        <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]} mt="-2rem" mb="2rem">
          OUR <span style={{ color: "#FF9900" }}>PARTNERS</span>
        </Heading>

        <SimpleGrid
          columns={[5, 6, 8 , 12]} // 2 columns on small screens, 12 columns on large screens
          gap={["5px", "8px", "10px"]} // Adjust the gap for different screen sizes
          width="100%"
        >
          {otherPartners.map((partner) => (
            <motion.div
              key={partner.id}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.075 }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Image
                  src={partner.image}
                  alt={`Logo of ${partner.category}`}
                  objectFit="contain"
                  width="100%" // Ensure full width of the grid cell
                  height={["60px", "70px", "80px"]} // Adjust the height for responsive design
                  mx="auto"
                />
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default PartnerPageCard;
