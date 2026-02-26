import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Container,
    Input,
    Separator,
    Center,
    Link,
} from "@chakra-ui/react";
import { FaChrome } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { LuBaggageClaim, LuHeart } from "react-icons/lu";


const LoginPage = () => {
    return (
        <Box bg="background.500" minH="100vh">

            {/* AUTH SECTION */}
            <Container maxW="1100px" py={16}>
                <Flex gap={12} align="stretch">
                    {/* LEFT INFO */}
                    <Box flex="1">
                        <Heading size="xl" mb={6}>
                            Log in to manage your trips
                        </Heading>

                        <Flex direction="column" gap={6}>
                            <InfoItem
                                title="Easily manage your bookings"
                                desc="View confirmation details, make changes, or cancel if needed."
                                icon={<LuBaggageClaim color='#0071c2' />}
                            />
                            <InfoItem
                                title="Save more with Genius"
                                desc="Get up to 20% off with our loyalty program just by signing in."
                                icon={<IoDiamondOutline color="#0071c2" />}
                            />
                            <InfoItem
                                title="Your favorite, saved"
                                desc="Keep track of the properties you love and want to book again."
                                icon={<LuHeart color="#0071c2" />}
                            />
                        </Flex>
                    </Box>

                    {/* RIGHT FORM */}
                    <Box
                        w="420px"
                        bg="white"
                        p={8}
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.200"
                    >
                        <Heading size="xl" mb={2}>
                            Sign in to your account
                        </Heading>

                        <Text color="muted.500" mb={6} fontSize="sm">
                            Access your account securily using your email and password.
                        </Text>
                        <Flex flexDirection={'column'}>
                            <FormField label="Email address" placeholder="name@example.com" />
                            <FormField label="Password" placeholder="••••••••" type="password" />

                            <Link mt={0} fontSize={12} mb={4} color={'primary.500'} href="/login">Forget your password?</Link>

                        </Flex>

                        <Button
                            bg="primary.500"
                            color="white"
                            w="full"
                            mt={2}
                            size={'lg'}
                        >
                            Sign in
                        </Button>
                        <Separator my={6} />


                        <Button  w="full" variant="outline" mb={3} color={"primary.500"} >
                            <FaChrome color="#0664b1" />
                            Continue with Google
                        </Button>



                        <Text mt={6} fontSize="sm" textAlign="center" color="muted.500">
                            Don't have any account?{" "}
                            <Box as={Link} color="primary.500" fontWeight="600">
                                Create account
                            </Box>
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default LoginPage;
const InfoItem = ({
    title,
    desc,
    icon
}: {
    title: string;
    desc: string;
    icon: React.ReactNode;
}) => (
    <Flex gap={4}>
        <Center
            w="40px"
            h="40px"
            bg="secondary.500"
            borderRadius="full"
        >
            {icon}
        </Center>
        <Box>
            <Heading size="md">{title}</Heading>
            <Text color="muted.500" fontSize="sm">
                {desc}
            </Text>
        </Box>
    </Flex>
);

const FormField = ({
    label,
    placeholder,
    type = "text",
}: {
    label: string;
    placeholder: string;
    type?: string;
}) => (
    <Box mb={4}>
        <Text fontSize="sm" fontWeight="500" mb={1}>
            {label}
        </Text>
        <Input placeholder={placeholder} type={type} />
    </Box>
);
