import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const AboutPageCard = () => {
  return (
    <Grid
      templateColumns={["1fr", "1fr 1fr"]} // Stack in one column on mobile, two columns on larger screens
      gap={4} // Reduced spacing between text and image
      alignItems="start" // Align items to the start (top)
      justifyContent="center"
      px={["1rem", "4rem"]} // Padding adjustment for different screen sizes
      pl={["2rem", "6rem"]} // Added left padding to shift content to the right
    >
      {/* Text Section */}
      <GridItem>
        <Box textAlign={["center", "left"]}>
          <Heading fontSize={["3xl", "4xl"]}>
            ABOUT{" "}
            <span style={{ color: useColorModeValue("#FF9900", "#FF9900") }}>
              US
            </span>
          </Heading>

          <Text
            mt="1rem"
            fontSize="md"
            fontWeight="bold"
            mb="1rem"
            color={useColorModeValue("gray.700", "gray.300")}
          >
            บริษัท ไทยดอทรัน จำกัด ฮับความสุขของนักวิ่ง
          </Text>

          <Text
            mt="1rem"
            fontSize="md"
            color={useColorModeValue("gray.700", "gray.300")}
            textAlign={["left", "left"]} // Ensure text is left-aligned on all screen sizes
          >
            บริษัท ไทยดอทรัน จำกัด เริ่มก่อตั้งเมื่อวันที่ 2 มีนาคม 2560
            เป็นบริษัทฯประกอบกิจการด้านบริการนักวิ่ง ด้วยระบบเทคโนโลยีครบวงจร
            คือ ระบบลงทะเบียน ระบบค้นหาภาพถ่ายด้วยใบหน้า การส่งผลวิ่ง
            ระบบเกี่ยวกับการจัดงานอีเว้นท์ด้านกีฬาทุกประเภท
          </Text>
        </Box>
      </GridItem>

      {/* Image Section */}
      <GridItem display="flex" justifyContent="center">
        <Image
          src="/marathonfreepik1.png" // Replace with your image path
          alt="About Us Image"
          objectFit="contain"
          width="100%"
          boxSize={["60px", "120px", "200px"]} // Reduced image size for different screen sizes
        />
      </GridItem>
    </Grid>
  );
};

export default AboutPageCard;
