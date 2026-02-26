import {
  Box,
  Grid,
  Heading,
  Text,
  Button,
  Image,
  Flex,
} from "@chakra-ui/react";

export const Offers = () => {
  return (
    <Box maxW="1100px" mx="auto" px={4} mt={16}>
      <Heading size="md">Offers</Heading>
      <Text color="muted" mb={6}>
        Promotions, deals and special offers for you
      </Text>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={6}
      >
        <Flex
          bg="white"
          border={'1px solid #e4e4e7'}
          borderRadius="md"
          p={5}
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Box flex="1">
            <Heading size="lg" mb={2}>
              Take your longest holiday yet
            </Heading>
            <Text color="muted" mb={4}>
              Browse properties offering long-term stays.
            </Text>
            <Button bg="primary.500" color="white">
              Find a stay
            </Button>
          </Box>

          <Image
            src="https://storage.googleapis.com/banani-generated-images/generated-images/573adeff-6e39-477e-a16e-dbb9c5adc957.jpg"
            w={{ base: "100%", md: "160px" }}
            h="auto"
            objectFit="cover"
            borderRadius="md"
          />
        </Flex>
        <Flex
          bg="white"
          borderRadius={'md'}
          border={'1px solid #e4e4e7'}
          p={5}
          direction={{ base: "column", md: "row" }}
          gap={4}
        >
          <Box flex="1">
            <Heading size="lg" mb={2}>
              Take your longest holiday yet
            </Heading>
            <Text color="muted" mb={4}>
              Browse properties offering long-term stays.
            </Text>
            <Button bg="primary.500" color="white">
              Search for flights
            </Button>
          </Box>

          <Image
            src="https://storage.googleapis.com/banani-generated-images/generated-images/573adeff-6e39-477e-a16e-dbb9c5adc957.jpg"
            w={{ base: "100%", md: "160px" }}
            h="auto"
            objectFit="cover"
            borderRadius="md"
          />
        </Flex>
      </Grid>
    </Box>
  );
};
