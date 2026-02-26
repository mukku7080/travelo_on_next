import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import TrendingDestinationCard from "./TrendingDestinationCard";

const destinations = [
  {
    name: "New Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5",
  },
  {
    name: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2",
  },
  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7",
  },
  {
    name: "Chennai",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
  },
  {
    name: "Hyderabad",
    image:
      "https://t4.ftcdn.net/jpg/03/60/89/09/360_F_360890991_Ykybj5JO5HYBaqWeROz9cR2jWXN8HZxf.jpg",
  },
];

const TrendingDestinations = () => {
  return (
    <Box maxW="1100px" mx="auto" my={12} px={4}>
      <Heading size="md" mb={1}>
        Trending destinations
      </Heading>

      <Text color="muted.500" mb={6}>
        Most popular choices for travelers from India
      </Text>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {destinations.map((item) => (
          <TrendingDestinationCard
            key={item.name}
            name={item.name}
            image={item.image}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default TrendingDestinations;
