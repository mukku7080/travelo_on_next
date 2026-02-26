import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Button,
    Input,
    HStack,
    VStack,
    Separator,
} from "@chakra-ui/react";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";

export default function RegisterPage() {
    return (
        <Flex minH="100vh" bg="#f6faff">
            {/* LEFT IMAGE PANEL */}
            <Box flex="1" position="relative" overflow="hidden">
                <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    alt="Travel"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />

                {/* Overlay */}
                <Box
                    position="absolute"
                    inset="0"
                    bg="linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.1))"
                />

                {/* Back Button */}
                <Flex
                    position="absolute"
                    top="48px"
                    left="48px"
                    w="48px"
                    h="48px"
                    rounded="full"
                    bg="whiteAlpha.300"
                    backdropFilter="blur(8px)"
                    align="center"
                    justify="center"
                    cursor="pointer"
                >
                    <FaArrowLeft color="white" />
                </Flex>

                {/* Hero Text */}
                <Box
                    position="absolute"
                    bottom="80px"
                    left="80px"
                    color="white"
                    maxW="600px"
                >
                    <Heading size="2xl" mb={6}>
                        Discover your next adventure.
                    </Heading>
                    <Text fontSize="lg" opacity={0.9}>
                        Join BookingTrip to find incredible places to stay,
                        exclusive deals, and seamless travel planning.
                    </Text>
                </Box>
            </Box>

            {/* RIGHT FORM PANEL */}
            <Flex
                w="560px"
                px="64px"
                align="center"
                justify="center"
                bg="white"
                boxShadow="-8px 0 32px rgba(0,0,0,0.04)"
            >
                <Box w="100%" maxW="420px">
                    <Heading size="lg" mb={2}>
                        Join BookingTrip
                    </Heading>

                    <Text color="gray.500" mb={8}>
                        Enter your mobile number to create an account or sign in.
                    </Text>

                    {/* Phone Input */}
                    <VStack gap={6} align="stretch">
                        <Box>
                            <Text fontSize="xs" fontWeight="bold" mb={2}>
                                MOBILE NUMBER
                            </Text>

                            <Flex border="1px solid" borderColor="gray.200" rounded="md">
                                <Flex
                                    align="center"
                                    px={4}
                                    bg="gray.100"
                                    borderRight="1px solid"
                                    borderColor="gray.200"
                                    gap={2}
                                    cursor="pointer"
                                >
                                    <Image
                                        src="https://flagcdn.com/w20/in.png"
                                        alt="India"
                                        boxSize="20px"
                                    />
                                    <Text fontWeight="semibold">+91</Text>
                                    <FaArrowDown />
                                </Flex>

                                <Input
                                    placeholder="98765 43210"
                                    border="none"
                                    _focus={{ boxShadow: "none" }}
                                />
                            </Flex>
                        </Box>

                        {/* Send OTP */}
                        <Button colorScheme="blue" size="lg">
                            Send OTP
                        </Button>

                        {/* OTP Section */}
                        <Box>
                            <Flex justify="space-between" mb={2}>
                                <Text fontSize="xs" fontWeight="bold">
                                    ENTER 4-DIGIT OTP
                                </Text>
                                <Text fontSize="xs" color="gray.500">
                                    Sent to +91 98765 43210
                                </Text>
                            </Flex>

                            <HStack gap={4}>
                                <Input
                                    textAlign="center"
                                    fontSize="2xl"
                                    maxW="64px"
                                    h="64px"
                                />
                                <Input
                                    textAlign="center"
                                    fontSize="2xl"
                                    maxW="64px"
                                    h="64px"
                                />
                                <Input
                                    textAlign="center"
                                    fontSize="2xl"
                                    maxW="64px"
                                    h="64px"
                                />
                                <Input
                                    textAlign="center"
                                    fontSize="2xl"
                                    maxW="64px"
                                    h="64px"
                                />
                            </HStack>

                            <Text
                                textAlign="right"
                                fontSize="sm"
                                fontWeight="semibold"
                                color="blue.500"
                                mt={2}
                                cursor="pointer"
                            >
                                Resend in 00:24
                            </Text>
                        </Box>

                        <Button colorScheme="blue" size="lg">
                            Verify & Continue
                        </Button>

                        <Separator />

                        <Button variant="outline" size="lg">
                            Continue with Gmail
                        </Button>

                        <Text
                            textAlign="center"
                            fontSize="sm"
                            color="gray.500"
                            mt={6}
                        >
                            By continuing, you agree to our Terms of Service
                            and Privacy Policy.
                        </Text>
                    </VStack>
                </Box>
            </Flex>
        </Flex>
    );
}