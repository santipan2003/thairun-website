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
      px={["1rem", "4rem"]}
      py="4rem"
      width="100%"
    >
      {/* Clients Section */}
      <Box textAlign="center" mb="4rem">
        <Heading fontSize={["4xl", "5xl"]} mb="2rem">
          OUR <span style={{ color: "#FF9900" }}>CLIENTS</span>
        </Heading>

        <SimpleGrid columns={[2, 3, 5]} spacing="40px" width="100%">
          {clients.map((client) => (
            <motion.div key={client.id} whileHover={{ scale: 1.075 }}>
              <Box
                p="2"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src={client.image}
                  alt={`Logo of ${client.category}`}
                  objectFit="contain"
                  width="100%"
                  height="100px" // Adjust the height as needed for logos
                  mb="4"
                  mx="auto"
                />
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>

      {/* Partners Section */}
      <Box textAlign="center" mb="4rem">
        <Heading fontSize={["4xl", "5xl"]} mb="2rem">
          OUR <span style={{ color: "#FF9900" }}>PARTNERS</span>
        </Heading>

        <SimpleGrid columns={[2, 3, 5]} spacing="40px" width="100%">
          {otherPartners.map((partner) => (
            <motion.div
              key={partner.id}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.075 }}
            >
              <Box
                p="2"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src={partner.image}
                  alt={`Logo of ${partner.category}`}
                  objectFit="contain"
                  width="100%"
                  height="100px" // Adjust the height as needed for logos
                  mb="4"
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
