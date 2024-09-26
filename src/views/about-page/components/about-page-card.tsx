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
      gap={8} // Add spacing between text and image
      alignItems="center"
      justifyContent="center"
      px={["1rem", "4rem"]} // Padding adjustment for different screen sizes
      py="4rem"
    >
      {/* Text Section */}
      <GridItem>
        <Box textAlign={["center", "left"]}>
          <Heading fontSize={["4xl", "5xl"]}>
            ABOUT{" "}
            <span style={{ color: useColorModeValue("#FF9900", "#FF9900") }}>
              US
            </span>
          </Heading>

          <Text
            mt="1rem"
            fontSize="lg"
            fontWeight="bold"
            mb="1rem"
            color={useColorModeValue("gray.700", "gray.300")}
          >
            บริษัท ไทยดอทรัน จำกัด ฮับความสุขของนักวิ่ง
          </Text>

          <Text
            mt="1rem"
            fontSize="lg"
            color={useColorModeValue("gray.700", "gray.300")}
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
          src="https://www.thai.run/wp-content/uploads/2020/04/thairun_logo_and_line-300x283.png" // Replace with your image path
          alt="About Us Image"
          objectFit="contain"
          width="100%"
          boxSize={["150px", "250px", "300px"]} // Make the image more flexible for different screen sizes
        />
      </GridItem>
    </Grid>
  );
};

export default AboutPageCard;
