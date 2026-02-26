import { Box, Text } from "@chakra-ui/react";

type TrendingDestinationCardProps = {
  image: string;
  name: string;
};

const TrendingDestinationCard = ({
  image,
  name,
}: TrendingDestinationCardProps) => {
  return (
    <Box
      position="relative"
      h="200px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      role="group"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        inset="0"
        bgImage={`url(${image})`}
        bgSize="cover"
        backgroundPosition="center"
        transition="transform 0.3s ease"
        _groupHover={{ transform: "scale(1.05)" }}
      />

      {/* Dark overlay */}
      <Box
        position="absolute"
        inset="0"
        bgGradient="linear(to-t, blackAlpha.700, blackAlpha.200, transparent)"
      />

      {/* City name */}
      <Text
        position="absolute"
        bottom="12px"
        left="12px"
        color="white"
        fontSize="lg"
        fontWeight="700"
        zIndex={1}
      >
        {name}
      </Text>
    </Box>
  );
};

export default TrendingDestinationCard;
