import { Box, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box
      bgImage="url('https://t3.ftcdn.net/jpg/06/42/07/32/360_F_642073280_7hjhjjfnSMVznuElskg9n55g6zNKIKnx.jpg')"
      bgSize="cover"
      // bgPosition="center"
      backgroundPosition="center"

      bgRepeat="no-repeat"
      color="white"
    >
      <Box
        maxW="1100px"
        mx="auto"
        px={4}
        py={{ base: 12, md: 20 }}
      >
        <Heading
          fontSize={{ base: "28px", md: "48px" }}
          mb={5}
        >
          Find your next stay
        </Heading>

        <Text
          fontSize={{ base: "md", md: "xl" }}
          opacity={0.9}
        >
          Search low prices on hotels, homes and much more...
        </Text>
      </Box>
    </Box>
  );
};
export default Hero;
