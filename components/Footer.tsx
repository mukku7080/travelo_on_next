import {
    Box,
    Container,
    Grid,
    GridItem,
    Flex,
    Heading,
    Text,
    Input,
    Button,
    Link,
    Separator,
} from "@chakra-ui/react";

type FooterLinkGroup = {
    title: string;
    links: string[];
};

const footerLinks: FooterLinkGroup[] = [
    {
        title: "Support",
        links: [
            "Manage your trips",
            "Contact Customer Service",
            "Safety Resource Center",
        ],
    },
    {
        title: "Discover",
        links: [
            "Genius loyalty program",
            "Seasonal and holiday deals",
            "Travel articles",
            "Booking.com for Business",
            "Traveller Review Awards",
        ],
    },
    {
        title: "Terms & Settings",
        links: [
            "Privacy & cookies",
            "Terms and conditions",
            "MSA Statement",
            "Human Rights Statement",
        ],
    },
    {
        title: "Partners",
        links: [
            "Extranet login",
            "Partner help",
            "List your property",
            "Become an affiliate",
        ],
    },
    {
        title: "About",
        links: [
            "About Booking.com",
            "How we work",
            "Sustainability",
            "Press center",
            "Careers",
            "Corporate contact",
        ],
    },
];

const Footer = () => {
    return (
        <Box as="footer" w="full">
            {/* ================= Newsletter ================= */}
            <Box bg="#00224f" py={12} color="white">
                <Container maxW="1100px" textAlign="center">
                    <Heading size="2xl" fontWeight="500" mb={2}>
                        Save time, save money !
                    </Heading>

                    <Text fontSize={14} color="gray.300" mb={6}>
                        Sign up and we'll send the best deals to you
                    </Text>

                    <Flex
                        maxW="600px"
                        mx="auto"
                        gap={2}
                        direction={{ base: "column", md: "row" }}
                    >
                        <Input
                            placeholder="Your email address"
                            bg="white"
                            color="black"
                        />
                        <Button bg="primary.500" color="white">
                            Subscribe
                        </Button>
                    </Flex>
                </Container>
            </Box>

            {/* ================= Links ================= */}
            <Box bg="background.500" py={12} borderTop="1px solid" borderColor="gray.200">
                <Container maxW="1100px">
                    <Grid
                        templateColumns={{
                            base: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(5, 1fr)",
                        }}
                        gap={8}
                    >
                        {footerLinks.map((group) => (
                            <GridItem key={group.title}>
                                <Heading size="md" mb={4}>
                                    {group.title}
                                </Heading>

                                <Flex direction="column" gap={3}>
                                    {group.links.map((link) => (
                                        <Link
                                            key={link}
                                            fontSize="sm"
                                            color="blue.600"
                                            fontWeight={540}
                                            _hover={{ textDecoration: "underline" }}
                                        >
                                            {link}
                                        </Link>
                                    ))}
                                </Flex>
                            </GridItem>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* ================= Bottom ================= */}
            <Box bg="white" py={10} borderTop="1px solid" borderColor={'gray.200'} >
                <Container maxW="1100px">
                    {/* Partner logos */}
                    <Flex
                        justify="center"
                        gap={6}
                        wrap="wrap"
                        opacity={0.6}
                        mb={6}
                    >
                        {[
                            "Partner1.com",
                            "Partner2.com",
                            "Partner3.com",
                            "Partner4.com",
                            "Partner5.com",
                            "Partner6.com",
                        ].map((brand) => (
                            <Text key={brand} fontWeight="700" color="primary.500">
                                {brand}
                            </Text>
                        ))}
                    </Flex>

                    <Separator />

                    {/* Social */}
                    <Flex justify="center" gap={6} my={6}>
                        {["Facebook", "Twitter", "Instagram", "YouTube"].map((social) => (
                            <Link key={social} fontSize="sm">
                                {social}
                            </Link>
                        ))}
                    </Flex>

                    {/* Copyright */}
                    <Text fontSize="xs" textAlign="center" color="gray.600">
                        Copyright © 1996–2025 Travelo.com™. All rights reserved.
                    </Text>

                    <Text
                        fontSize="xs"
                        textAlign="center"
                        color="gray.500"
                        mt={2}
                    >
                        The world leader in
                        online travel and related services.
                    </Text>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
