import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Image,
  VStack,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLine, FaFacebookMessenger } from "react-icons/fa";

const ContactPageCard = () => {
  return (
    <Flex
      direction={["column", "row"]}
      alignItems="center"
      justifyContent="center"
      zIndex="1"
      position="relative"
      height="100%"
      px={["1rem", "4rem"]}
      py="4rem"
    >
      {/* Left section: Contact information */}
      <Box flex="1" textAlign={["center", "left"]} pr={["0", "2rem"]}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <Heading fontSize={["4xl", "5xl"]} mb="1rem">
            CONTACT{" "}
            <span style={{ color: useColorModeValue("#FF9900", "#FF9900") }}>
              US
            </span>
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
        >
          <Text
            mt="1rem"
            fontSize="lg"
            mb="1rem"
            color={useColorModeValue("gray.700", "gray.300")}
          >
            Get in touch with us
          </Text>
        </motion.div>

        {/* Contact Info */}
        <VStack align="start" spacing={4}>
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            <HStack
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s",
              }}
            >
              <Icon as={FaEnvelope} w={8} h={8} color="gray.600" />
              <Link href="mailto:admin@thai.run" isExternal>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{ color: "#FF9900" }}
                >
                  EMAIL: admin@thai.run
                </Text>
              </Link>
            </HStack>
          </motion.div>

          {/* LINE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <HStack
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s",
              }}
            >
              <Icon as={FaLine} w={8} h={8} color="gray.600" />
              <Link href="https://line.me/R/ti/p/@thairun" isExternal>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{ color: "#FF9900" }}
                >
                  LINE: @thairun
                </Text>
              </Link>
            </HStack>
          </motion.div>

          {/* Messenger */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <HStack
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.2s",
              }}
            >
              <Icon as={FaFacebookMessenger} w={8} h={8} color="gray.600" />
              <Link href="https://m.me/thaidotrun" isExternal>
                <Text
                  fontSize="lg"
                  fontWeight="bold"
                  _hover={{ color: "#FF9900" }}
                >
                  Messenger: m.me/thaidotrun
                </Text>
              </Link>
            </HStack>
          </motion.div>
        </VStack>
      </Box>

      {/* Right section: Image */}
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <Image
            src="/IMG_9836.jpg"
            alt="Contact Us Image"
            width="100%"
            boxSize={["300px", "400px"]}
            borderRadius="lg"
            boxShadow="lg"
          />
        </motion.div>
      </Box>
    </Flex>
  );
};

export default ContactPageCard;
