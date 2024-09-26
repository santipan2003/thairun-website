import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  VStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaEnvelope, FaLine, FaFacebookMessenger } from "react-icons/fa";

const ContactPageCard = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={useColorModeValue("gray.50", "black")}
      px={["1rem", "2rem"]}
      py="2rem"
      mt="1rem"
      borderRadius="lg"
      shadow="lg"
    >
      {/* Header */}
      <Heading
        as="h1"
        fontSize={["3xl", "4xl"]}
        textAlign="center"
        mb="1.5rem"
        color={useColorModeValue("gray.800", "gray.700")}
      >
        CONTACT{" "}
        <Box as="span" color={useColorModeValue("#FF9900", "#FF9900")}>
          US
        </Box>
      </Heading>

      {/* Subheading */}
      <Text
        fontSize="lg"
        textAlign="center"
        mb="2rem"
        color={useColorModeValue("gray.600", "gray.300")}
      >
        We&apos;d love to hear from you!
      </Text>

      {/* Contact Info */}
      <VStack spacing={6} align="stretch" width={["100%", "80%", "50%"]}>
        {/* Email */}
        <ContactMethod
          icon={FaEnvelope}
          href="mailto:admin@thai.run"
          label="Email"
          value="admin@thai.run"
        />

        {/* LINE */}
        <ContactMethod
          icon={FaLine}
          href="https://line.me/R/ti/p/@thairun"
          label="LINE"
          value="@thairun"
        />

        {/* Messenger */}
        <ContactMethod
          icon={FaFacebookMessenger}
          href="https://m.me/thaidotrun"
          label="Messenger"
          value="m.me/thaidotrun"
        />
      </VStack>
    </Flex>
  );
};

interface ContactMethodProps {
  icon: React.ElementType;
  href: string;
  label: string;
  value: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({
  icon,
  href,
  label,
  value,
}) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const iconColor = useColorModeValue("gray.600", "gray.300");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      py={3}
      px={4}
      bg={bgColor}
      shadow="md"
      borderRadius="md"
      _hover={{
        transform: "translateY(-4px)",
        transition: "all 0.3s",
        shadow: "lg",
      }}
    >
      <Icon as={icon} w={6} h={6} color={iconColor} />
      <Link href={href} isExternal ml={3}>
        <Text
          fontSize="lg"
          fontWeight="medium"
          color={textColor}
          _hover={{ color: "#FF9900" }}
        >
          {label}: {value}
        </Text>
      </Link>
    </Flex>
  );
};

export default ContactPageCard;
