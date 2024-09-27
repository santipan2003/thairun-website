import {
  Box,
  Heading,
  Text,
  Flex,
  useColorModeValue,
  Link,
  Grid,
  GridItem,
  Image,
  VStack,
} from "@chakra-ui/react";

const ContactPageCard = () => {
  const cardBgColor = useColorModeValue("white", "black"); // Toggle between white and black for the card background
  const cardTextColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      bg={cardBgColor}
      color={cardTextColor}
      borderRadius="lg"
      shadow="lg"
      p={4}
    >
      <Grid
        templateColumns={["1fr", "1fr 1fr"]} // ใช้ 1 คอลัมน์ในหน้าจอเล็ก และ 2 คอลัมน์ในหน้าจอใหญ่
        gap={4} // เว้นระยะห่างระหว่างคอลัมน์
        alignItems="center" // จัดให้ทั้งสองฝั่งตรงกลางในแนวตั้ง
        justifyContent="center" // จัดให้อยู่ตรงกลาง
        px={["1rem", "2rem"]} // การปรับระยะห่างสำหรับหน้าจอขนาดต่าง ๆ
        py="2rem"
        mt="1rem"
       
        bg={useColorModeValue("gray.50", "black")}
      >
        {/* Contact Info Section */}
        <GridItem maxWidth="100%">
          {" "}
          {/* บังคับให้มีความกว้างตามที่จำเป็น */}
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center" // จัดให้อยู่กึ่งกลางแนวตั้ง
          >
            {/* Header */}
            <Heading
              as="h1"
              fontSize={["3xl", "4xl"]}
              textAlign="center"
              mb="1rem"
              color={useColorModeValue("gray.800", "white")}
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
              mb="1rem"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              We&apos;d love to hear from you!
            </Text>

            {/* Contact Info */}
            <VStack spacing={4} width="100%" mt={4} maxW="500px">
              {" "}
              {/* บังคับขนาดสูงสุด */}
              <ContactMethod
                iconSrc="/social.png"
                href="mailto:admin@thai.run"
                label="Email"
                value="admin@thai.run"
                alt="Email Icon"
              />
              <ContactMethod
                iconSrc="/line.png"
                href="https://line.me/R/ti/p/@thairun"
                label="LINE"
                value="@thairun"
                alt="LINE Icon"
              />
              <ContactMethod
                iconSrc="/messenger.png"
                href="https://m.me/thaidotrun"
                label="Messenger"
                value="m.me/thaidotrun"
                alt="Messenger Icon"
              />
            </VStack>
          </Flex>
        </GridItem>

        {/* Map Section */}
        <GridItem height="300px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%" // ให้ iframe กินพื้นที่ทั้งหมด
            borderRadius="lg" // ปรับขอบให้มน
            overflow="hidden" // ซ่อนส่วนเกินถ้ามี
            shadow="lg" // เพิ่มเงาให้ iframe
            border="2px solid" // เพิ่มขอบให้ iframe
            borderColor={useColorModeValue("gray.300", "gray.600")} // กำหนดสีของขอบ
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d814.729067121445!2d100.52371885538717!3d13.747097932214109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d324835251%3A0x34d19b0abbdd3821!2z4LmE4LiX4Lii4Lij4Lix4LiZ!5e0!3m2!1sth!2sth!4v1727424127548!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

interface ContactMethodProps {
  iconSrc: string;
  href: string;
  label: string;
  value: string;
  alt: string;
}

const ContactMethod: React.FC<ContactMethodProps> = ({
  iconSrc,
  href,
  label,
  value,
  alt,
}) => {
  const bgColor = useColorModeValue("white", "black"); // Toggle between white and black
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Flex
      alignItems="center"
      justifyContent="flex-start" // จัดเรียงให้ชิดซ้าย
      py={2}
      px={4}
      bg={bgColor}
      shadow="md"
      borderRadius="md"
      width="100%" // ทำให้กินพื้นที่เต็มความกว้าง
      _hover={{
        transform: "translateY(-4px)",
        transition: "all 0.3s",
        shadow: "lg",
      }}
    >
      <Image src={iconSrc} w={6} h={6} alt={alt} />
      <Link href={href} isExternal ml={3}>
        <Text
          fontSize="md"
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
