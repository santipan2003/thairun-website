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
        <Heading fontSize={["4xl", "5xl"]} mb="1rem">
          CONTACT{" "}
          <span style={{ color: useColorModeValue("#FF9900", "#FF9900") }}>
            US
          </span>
        </Heading>

        <Text
          mt="1rem"
          fontSize="lg"
          mb="1rem"
          color={useColorModeValue("gray.700", "gray.300")}
        >
          Get in touch with us
        </Text>

        {/* Contact Info */}
        <VStack align="start" spacing={4}>
          {/* Email */}

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

          {/* LINE */}

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

          {/* Messenger */}

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
        </VStack>
      </Box>

      {/* Right section: Image */}
      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
        <Image
          src="/IMG_9836.jpg"
          alt="Contact Us Image"
          width="100%"
          boxSize={["300px", "400px"]}
          borderRadius="lg"
          boxShadow="lg"
        />
      </Box>
    </Flex>
  );
};

export default ContactPageCard;
