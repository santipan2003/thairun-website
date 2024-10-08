import {
  Box,
  Flex,
  Text,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Define the height of your Navbar here
  const navbarHeight = 60; // Adjust based on your Navbar height
  const logoSrc = useColorModeValue("/IMG_9836.jpg", "/logothairun-W.png");
  const hoverColor = useColorModeValue("gray.600", "gray.300");
  const bgColor = useColorModeValue("white", "black");
  const mobileHoverBg = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      as="nav"
      py={[2, 1]}
      boxShadow="md"
      bgColor={bgColor}
      position="fixed"
      top="0"
      left="0"
      width="100%"
      zIndex="1000"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={5}
        justify="space-between"
        align="center"
      >
        <Link href="/" passHref>
          <Image
            src={logoSrc}
            alt="Logo Thairun"
            boxSize={["50px", "75px", "50px"]}
            objectFit="cover"
            cursor="pointer" // Optional: Add cursor pointer to indicate it's clickable
          />
        </Link>
        <Flex
          alignItems="center"
          justify="flex-end"
          flex="1"
          display={{ base: "none", md: "flex" }}
        >
          <HStack as="nav" spacing={4} mr={2}>
            <ScrollLink
              to="landing"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  color: hoverColor,
                }}
              >
                Home
              </Text>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  color: hoverColor,
                }}
              >
                About
              </Text>
            </ScrollLink>
            <ScrollLink
              to="product"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  color: hoverColor,
                }}
              >
                Product
              </Text>
            </ScrollLink>
            <ScrollLink
              to="update"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  color: hoverColor,
                }}
              >
                Update
              </Text>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  color: hoverColor,
                }}
              >
                Contact
              </Text>
            </ScrollLink>
          </HStack>
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle color mode"
          />
        </Flex>
        <Flex alignItems="center" display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle color mode"
            mr={2}
          />
          <IconButton
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle navigation"
          />
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }} rounded="md" shadow="md" mt={2}>
          <Stack as="nav" spacing={4} p={4}>
            <ScrollLink
              to="landing"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  bg: mobileHoverBg,
                  rounded: "md",
                  padding: 2,
                }}
              >
                Home
              </Text>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  bg: mobileHoverBg,
                  rounded: "md",
                  padding: 2,
                }}
              >
                About
              </Text>
            </ScrollLink>
            <ScrollLink
              to="education"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  bg: mobileHoverBg,
                  rounded: "md",
                  padding: 2,
                }}
              >
                Education
              </Text>
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  bg: mobileHoverBg,
                  rounded: "md",
                  padding: 2,
                }}
              >
                Skill
              </Text>
            </ScrollLink>
            <ScrollLink
              to="project"
              smooth={true}
              duration={500}
              offset={-navbarHeight}
              onClick={onClose}
            >
              <Text
                cursor="pointer"
                transition="transform 0.2s"
                _hover={{
                  transform: "scale(1.2)",
                  textDecoration: "none",
                  bg: mobileHoverBg,
                  rounded: "md",
                  padding: 2,
                }}
              >
                Project
              </Text>
            </ScrollLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
