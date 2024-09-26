import {
  Flex,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
  Icon,
} from "@chakra-ui/react";
import {
  FaPercentage,
  FaUserAlt,
  FaProjectDiagram,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";

// Removed MotionBox, using motion.div directly

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  stat: string | number;
  onComplete: () => void;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  stat,
  onComplete,
}) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      p={4}
      color="#FF9900" // Set the color to #FF9900 for both light and dark mode
    >
      <Icon as={icon} w={10} h={10} mb={2} />
      <motion.div
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        onAnimationComplete={onComplete} // Trigger countUp after animation completes
      >
        <motion.div
          style={{ fontSize: "2rem", fontWeight: "bold", color: "#FF9900" }} // Set style for the number
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {stat}
        </motion.div>
      </motion.div>

      <Text fontSize="lg" fontWeight="medium" mt={2} color="black">
        {label}
      </Text>
    </Flex>
  );
};

const StatPageCard = () => {
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  // Function to animate the counting effect
  const countUp = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    finalValue: number,
    duration: number
  ) => {
    let startValue = 0;
    const increment = finalValue / (duration / 50);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= finalValue) {
        startValue = finalValue;
        clearInterval(counter);
      }
      setter(Math.floor(startValue));
    }, 50); // Update every 50ms
  };

  // Trigger the count-up after the animation completes
  const handleCountUpSuccessRate = () => {
    countUp(setSuccessRate, 99, 500); // 500ms to count up to 99% success rate
  };

  const handleCountUpClients = () => {
    countUp(setClients, 200, 500); // 500ms to count up to 200 clients
  };

  const handleCountUpProjects = () => {
    countUp(setProjects, 16, 500); // 500ms to count up to 16 successful projects
  };

  const handleCountUpYears = () => {
    countUp(setYears, 2017, 500); // 500ms to count up to 2017 years
  };

  return (
    <Flex
      justify="center"
      align="center"
      bg={useColorModeValue("gray.50", "gray.900")}
      p={5}
    >
      <Wrap spacing={10} justify="center" align="center">
        <WrapItem>
          <StatCard
            icon={FaPercentage}
            label="Success Rate"
            stat={`${successRate} %`}
            onComplete={handleCountUpSuccessRate} // CountUp starts after animation
          />
        </WrapItem>
        <WrapItem>
          <StatCard
            icon={FaUserAlt}
            label="Clients Served Globally"
            stat={`+ ${clients}`}
            onComplete={handleCountUpClients} // CountUp starts after animation
          />
        </WrapItem>
        <WrapItem>
          <StatCard
            icon={FaProjectDiagram}
            label="Successful Products"
            stat={`+ ${projects}`}
            onComplete={handleCountUpProjects} // CountUp starts after animation
          />
        </WrapItem>
        <WrapItem>
          <StatCard
            icon={FaCalendarAlt}
            label="Years in IT Business"
            stat={`+ ${years}`}
            onComplete={handleCountUpYears} // CountUp starts after animation
          />
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default StatPageCard;
