"use client"
import {
    Box,
    Flex,
    Grid,
    Text,
    Button,
    Input,
    Stack,
    Image,
    Badge,
    Checkbox,
    Slider,
    IconButton,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { FaRegStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import SearchWidget from "../../../components/SearchWidget";

export default function HotelListingPage() {
    const hotels = [
        {
            id: 1,
            name: "The President Hotel",
            stars: 5,
            location: "Cuffe Parade, Mumbai · 2.5 km from center",
            reviewLabel: "Superb",
            reviewCount: "1240 reviews",
            rating: 9.2,
            price: "₹15,200",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        },
        {
            id: 2,
            name: "Grand Central Resort",
            stars: 4,
            location: "Bandra West, Mumbai · 8 km from center",
            reviewLabel: "Very good",
            reviewCount: "124 reviews",
            rating: 8.5,
            price: "₹9,500",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
        },
        {
            id: 3,
            name: "Sea View Boutique Hotel",
            stars: 3,
            location: "Juhu Beach, Mumbai · 12 km from center",
            reviewLabel: "Nice",
            reviewCount: "140 reviews",
            rating: 7.8,
            price: "₹5,400",
            image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        },
    ];

    return (
        <Box bg="gray.100" minH="100vh">
            {/* HEADER SEARCH */}
            <Box bg={'footerdark.500'} py={6}>
                <Flex
                    // maxW="1200px"
                    mx="auto"
                    mt={{ sm: 0, md: 14, lg: 14 }}
                    // bg="white"
                    p={4}
                    borderRadius="md"
                    gap={3}
                >
                    <SearchWidget />
                    {/* <Input placeholder="Mumbai, India" />
          <Input placeholder="Tue 14 Oct - Wed 15 Oct" />
          <Input placeholder="2 adults · 1 room" />
          <Button colorPalette="blue">Search</Button> */}
                </Flex>
            </Box>

            {/* MAIN CONTENT */}
            <Grid
                templateColumns={{ base: "1fr", md: "280px 1fr" }}
                gap={6}
                maxW="1200px"
                mx="auto"
                mt={6}
                px={4}
            >
                {/* FILTER SIDEBAR */}
                <Box bg="white" p={5} borderRadius="md" shadow="sm">
                    <Text fontWeight="bold" mb={4}>
                        Filter by:
                    </Text>

                    <Text fontSize="sm" mb={2}>
                        Your budget (per night)
                    </Text>

                    {/* Chakra v3 Slider */}
                    <Slider.Root defaultValue={[40]}>
                        <Slider.Control>
                            <Slider.Track>
                                <Slider.Range />
                            </Slider.Track>
                            <Slider.Thumbs />
                        </Slider.Control>
                    </Slider.Root>

                    {/* STAR RATING */}
                    <Text fontWeight="semibold" mt={6} mb={2}>
                        Star rating
                    </Text>

                    <Stack gap={2}>
                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>5 stars</Checkbox.Label>
                        </Checkbox.Root>

                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>4 stars</Checkbox.Label>
                        </Checkbox.Root>

                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>3 stars</Checkbox.Label>
                        </Checkbox.Root>
                    </Stack>

                    {/* FACILITIES */}
                    <Text fontWeight="semibold" mt={6} mb={2}>
                        Facilities
                    </Text>

                    <Stack gap={2}>
                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Free WiFi</Checkbox.Label>
                        </Checkbox.Root>

                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Swimming pool</Checkbox.Label>
                        </Checkbox.Root>

                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Breakfast included</Checkbox.Label>
                        </Checkbox.Root>

                        <Checkbox.Root>
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>Parking</Checkbox.Label>
                        </Checkbox.Root>
                    </Stack>
                </Box>

                {/* HOTEL LIST */}
                <Box>
                    <Text fontSize="xl" fontWeight="bold" mb={4}>
                        Mumbai: 452 properties found
                    </Text>

                    <Stack gap={5}>
                        {hotels.map((hotel) => (
                            <Flex
                                key={hotel.id}
                                bg="white"
                                borderRadius="md"
                                shadow="sm"
                                p={4}
                                gap={4}
                                align="start"
                            >
                                <Image
                                    src={hotel.image}
                                    boxSize="180px"
                                    objectFit="cover"
                                    borderRadius="md"
                                />

                                <Box flex="1">
                                    <Text fontSize="lg" fontWeight="bold" color="blue.600">
                                        {hotel.name}
                                    </Text>

                                    <Flex mt={1} align="center">
                                        <Flex gap={1} align="start">
                                            {Array.from({ length: hotel.stars }).map((_, i) => (
                                                <Icon
                                                    key={i}
                                                    as={FaRegStar}
                                                    color="yellow.400"
                                                    boxSize={4}
                                                />
                                            ))}

                                            <IconButton
                                                aria-label="like"
                                                size="2xs"
                                                w="22px"
                                                h="22px"
                                                minW="22px"
                                                ml={2}
                                                borderRadius="sm"
                                                variant="solid"
                                                bg="yellow.400"
                                                _hover={{ bg: "yellow.500" }}
                                                color="black"
                                            >
                                                <Icon as={FaRegThumbsUp} boxSize={2.5} />
                                            </IconButton>
                                        </Flex>
                                    </Flex>

                                    <Text fontSize="sm" color="gray.500">
                                        {hotel.location}
                                    </Text>

                                    <Badge mt={2} colorPalette="green">
                                        Free cancellation
                                    </Badge>
                                </Box>

                                <Box textAlign="right">
                                    {/* <Badge colorPalette="blue" mb={2}>
                    {hotel.rating}
                  </Badge> */}
                                    <Flex align="center" gap="3">
                                        {/* REVIEW TEXT */}
                                        <Box textAlign="right">
                                            <Text fontWeight="semibold" fontSize="sm">
                                                {hotel.reviewLabel}
                                            </Text>
                                            <Text fontSize="xs" color="gray.500">
                                                {hotel.reviewCount}
                                            </Text>
                                        </Box>

                                        {/* RATING BADGE */}
                                        <Box
                                            bg="blue.600"
                                            color="white"
                                            px="2"
                                            py="1"
                                            borderRadius="md"
                                            borderBottomLeftRadius="0"
                                            fontWeight="900"
                                            fontSize="md"
                                        >
                                            {hotel.rating}
                                        </Box>
                                    </Flex>

                                    <Text fontSize="2xl" fontWeight="bold">
                                        {hotel.price}
                                    </Text>

                                    <Button mt={2} colorPalette="blue">
                                        View details {">"}
                                    </Button>
                                </Box>
                            </Flex>
                        ))}
                    </Stack>
                </Box>
            </Grid>
        </Box>
    );
}
