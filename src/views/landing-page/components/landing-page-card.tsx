import { Box, Heading, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const LandingPageCard = () => {
  const handWaveAnimation = {
    rotate: [0, -20, 10, -10, 20, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1.5,
    },
  };

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center" // Centers both vertically and horizontally
        zIndex="1"
        position="relative"
        height="100%" // Ensure Flex takes full height of the viewport
      >
        <Box textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <Heading fontSize={["4xl"]}>
              www.thairun.run
              <motion.span
                animate={handWaveAnimation}
                style={{ display: "inline-block" }}
              >
                👋
              </motion.span>
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
              mb="13rem"
              color={useColorModeValue("gray.500", "gray.300")}
            >
              เทคโนโลยีคนไทย เพื่องานวิ่งไทย
              <br /> สนับสนุนโดย สกสว.
            </Text>
          </motion.div>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPageCard;
