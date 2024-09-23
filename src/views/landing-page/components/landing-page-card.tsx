import { Box, Heading, Text, Flex } from "@chakra-ui/react";

const LandingPageCard = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height="100vh"
      overflow="hidden"
      backgroundImage="url('/UXUI Thai.run.svg')" // Add background image
      backgroundSize="cover" // Ensure the image covers the full area
      backgroundPosition="center" // Center the background image
      backgroundRepeat="no-repeat" // Prevent background image from repeating
    >
      {/* Dark Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.4)" // Semi-transparent black overlay to darken the background
        zIndex="0" // Ensure the overlay is behind the content
      />

      {/* Centered Content */}
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        zIndex="1" // Ensure content is above the overlay
        position="relative"
        height="100%" // Ensure Flex takes full height of the viewport
        px={[4, 8]} // Padding X for responsiveness
        textAlign="center" // Center text on smaller screens
      >
        <Box>
          {/* Hero Heading */}
          <Heading
            fontSize={["4xl", "5xl", "6xl"]}
            color="white"
            fontWeight="bold"
          >
            www.thai.run <br />
            <Text fontSize={["xl", "2xl", "3xl"]}>
              เทคโนโลยีคนไทย เพื่องานวิ่งไทย <br />
              สนับสนุนโดย
              <Text as="span" color="#FF9900">
                {" "}
                สกสว.
              </Text>{" "}
            </Text>
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPageCard;
