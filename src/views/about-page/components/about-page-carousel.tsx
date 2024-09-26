import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import {
  Box,
  Avatar,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Swiper as SwiperType } from "swiper";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "Product Designer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    testimonial:
      "John has over 10 years of experience in design, leading projects for top tech companies. His passion is creating seamless user experiences.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    testimonial:
      "Jane is a highly skilled frontend developer with a love for crafting modern, responsive web applications. She&rsquo;s the brains behind the code.",
  },
  {
    id: 3,
    name: "Sam Green",
    title: "Full Stack Developer",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    testimonial:
      "With a background in full stack development, Sam excels in building scalable applications. He ensures that everything runs smoothly behind the scenes.",
  },
  {
    id: 4,
    name: "Alice Brown",
    title: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    testimonial:
      "Alice is a talented UI/UX designer who creates intuitive and beautiful user interfaces. Her designs are both functional and aesthetically pleasing.",
  },
  {
    id: 5,
    name: "Michael Johnson",
    title: "Backend Developer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    testimonial:
      "Michael is a backend developer with expertise in building robust and scalable server-side applications. He ensures that the backend is secure and efficient.",
  },
];

const TestimonialCarousel = () => {
  const handleSlideChange = (swiper: SwiperType) => {
    if (swiper.activeIndex === 4) {
      swiper.slideTo(1, 0); // Slide to Slide 2 (index 1) without transition
    }
  };

  const slidesPerView = useBreakpointValue({ base: 1, md: 2, lg: 3 });

  return (
    <Box maxW="1400px" mx="auto" p={6}>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={true}
        spaceBetween={30} // Adjust space between slides if needed
        initialSlide={1} // Start at Slide 2 (index 1)
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        loop={true}
        onSlideChange={handleSlideChange}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <Box
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              textAlign="center"
              transition="transform 0.3s ease"
              _hover={{ transform: "scale(1.05)" }}
              mx="auto" // Center the card horizontally
              my={4} // Add vertical margin to each card
              maxW="400px" // Set a wider maximum width for the card
              width="100%" // Ensure card takes full available width
            >
              <Avatar
                size="xl"
                src={testimonial.avatar}
                name={testimonial.name}
                mb={4}
                mx="auto"
              />
              <Heading as="h3" size="md" mb={2}>
                {testimonial.name}
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={4}>
                {testimonial.title}
              </Text>
              <Text fontSize="md" fontStyle="italic">
                &quot;{testimonial.testimonial}&quot;
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TestimonialCarousel;
