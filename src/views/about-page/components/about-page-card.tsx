import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const AboutPageCard = () => {
  return (
    <Flex
      direction={["column", "row"]} // Stack vertically on mobile, horizontally on larger screens
      alignItems="center"
      justifyContent="center"
      zIndex="1"
      position="relative"
      height="100%" // Ensure Flex takes full height of the viewport
      px={["1rem", "4rem"]} // Add padding for better alignment
      py="4rem"
    >
      <Box flex="1" textAlign={["center", "left"]} pr={["0", "2rem"]}>
        
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

      <Box flex="1" display="flex" justifyContent="center" alignItems="center">
      
          <Image
            src="https://www.thai.run/wp-content/uploads/2020/04/thairun_logo_and_line-300x283.png" // Replace with your image path
            alt="About Us Image"
            width="100%"
            boxSize={["150px", "200px"]} // Adjust image size for different screen sizes
          />
      </Box>
    </Flex>
  );
};

export default AboutPageCard;
