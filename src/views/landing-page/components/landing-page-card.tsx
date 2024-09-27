import { Box, Heading, Flex } from "@chakra-ui/react";

const LandingPageCard = () => {
  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "25vh", md: "65vh" }} // Adjust height for mobile screens
      overflow="hidden"
      backgroundImage="url('/pexels-runffwpu-2526878.jpg')" // Add background image
      backgroundSize="cover" // Ensure the image covers the full area
      backgroundPosition="center" // Center the background image
      backgroundRepeat="no-repeat" // Prevent background image from repeating
      objectFit={"cover"} // Adjust image size for mobile screens
    >
      {/* Dark Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.6)" // Semi-transparent black overlay to darken the background
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
            fontSize={["3xl", "4xl", "5xl"]} // Reduced font size by one size
            color="white"
            fontWeight="bold"
          >
            ไทยรัน ฮับความสุขนักวิ่ง <br />
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPageCard;
