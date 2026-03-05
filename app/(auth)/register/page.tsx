"use client"
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Container,
    Input,
    Checkbox,
    Separator,
    Center,
    Link,
    HStack,
    Spinner,
    PinInput,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChrome, FaGoogle } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { LuBadgePercent } from "react-icons/lu";
import { MdSecurity } from "react-icons/md";
// import { toaster } from "../components/ui/toaster";
import { auth, db } from "../../../firebase";
import {
    RecaptchaVerifier,
    signInWithPhoneNumber,
    ConfirmationResult,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { toaster } from "../../../components/ui/toaster";

const Page = () => {
    const OTP_LENGTH = 6
    const [phone, setPhone] = useState<string>("");
    const [otp, setOtp] = useState<string[]>(
        Array(OTP_LENGTH).fill("")
    )
    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [sendloading, setSendLoading] = useState<boolean>(false);
    const [verifyloading, setVerifyLoading] = useState<boolean>(false);

    // const setupRecaptcha = () => {
    //     if (!(window as any).recaptchaVerifier) {
    //         (window as any).recaptchaVerifier = new RecaptchaVerifier(
    //             auth,
    //             "recaptcha-container",
    //             { size: "invisible" }
    //         );
    //     }
    // };
    const setupRecaptcha = () => {
        if (typeof window === "undefined") return;

        if (!(window as any).recaptchaVerifier) {
            const verifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                {
                    size: "invisible",
                }
            );

            (window as any).recaptchaVerifier = verifier;
        }
    };
    const sendOtp = async (): Promise<void> => {
        if (!phone) {
            toaster.create({ description: "Enter phone number", type: "warning" });
            return;
        }

        setSendLoading(true);
        setupRecaptcha();

        try {
            const appVerifier = (window as any).recaptchaVerifier;

            const result = await signInWithPhoneNumber(
                auth,
                phone,
                appVerifier
            );

            setConfirmationResult(result);
            toaster.create({
                description: "OTP Sent Successfully 🚀",
                type: "success",                
            });
        } catch (error: any) {
            toaster.create({
                description: error.message,
                type: "error",
            });
        } finally {
            setSendLoading(false);
        }
    };

    const verifyOtp = async (): Promise<void> => {
        if (!otp || !confirmationResult) {
            toaster.create({ description: "Enter OTP", type: "warning" });
            return;
        }

        setVerifyLoading(true);

        try {
            const otpString = otp.join("");
            const userCredential = await confirmationResult.confirm(otpString);
            const user = userCredential.user;

            await setDoc(
                doc(db, "users", user.uid),
                {
                    uid: user.uid,
                    phone: user.phoneNumber,
                    createdAt: serverTimestamp(),
                    isOnline: true,
                },
                { merge: true }
            );

            toaster.create({
                description: "Login Successful 🎉",
                type: "success",
            });
        } catch (error) {
            toaster.create({
                description: "Invalid OTP",
                type: "error",
            });
        } finally {
            setVerifyLoading(false);
        }
    };



    return (
        <Box bg="background.500" minH="100vh">

            {/* AUTH SECTION */}
            <Container maxW="1100px" py={16}>
                <Flex gap={12} align="stretch" flexDirection={{ base: 'column', sm: 'column', md: 'row', xl: 'row' }} alignItems={{ sm: 'center', md: 'normal' }}>
                    {/* LEFT INFO */}
                    <Box flex="1" >
                        <Heading size="xl" mb={6}>
                            Create your Travelo.com account
                        </Heading>

                        <Flex direction="column" gap={6}>
                            <InfoItem
                                description="Manage all your bookings"
                                desc="View, change, or cancel your stays and trips in one place, anytime."
                                icon={<FiUserPlus color="#0071c2" />}
                            />
                            <InfoItem
                                description="Unlock Genius rewards"
                                desc="Get instant discounts, free perks, and special member-only deals."
                                icon={<LuBadgePercent color="#0071c2" />}
                            />
                            <InfoItem
                                description="Secure and fast checkout"
                                desc="Save your details safely and check out faster on every future booking."
                                icon={<MdSecurity color="#0071c2" />}
                            />
                        </Flex>
                    </Box>

                    {/* RIGHT FORM 1 */}
                    {/* <Box
                        w="420px"
                        bg="white"
                        p={8}
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
                    >
                        <Heading size="xl" mb={2}>
                            Create account
                        </Heading>

                        <Text color="muted.500" mb={6} fontSize="sm">
                            Sign up using your email address or continue with one of the
                            options below.
                        </Text>

                        <FormField label="Full name" placeholder="John Doe" />
                        <FormField label="Email address" placeholder="name@example.com" />
                        <FormField label="Password" placeholder="••••••••" type="password" />
                        <FormField
                            label="Confirm password"
                            placeholder="••••••••"
                            type="password"
                        />


                        <Checkbox.Root mt={4} mb={4}>
                            <Checkbox.Control />
                            <Checkbox.Label fontSize={12}>
                                Send me travel deals, personalized recommendations.
                            </Checkbox.Label>
                        </Checkbox.Root>


                        <Button
                            bg="primary.500"
                            color="white"
                            w="full"
                            mt={2}
                        >
                            Create account
                        </Button>
                        <Separator my={6}>
                        </Separator>
                        <Button w="full" variant="outline" mb={3}>
                            Continue with Google <FaChrome />
                        </Button>



                        <Text mt={6} fontSize="sm" textAlign="center" color="muted.500">
                            Already have an account?{" "}
                            <Box as={Link} color="primary.500" fontWeight="600">
                                Sign in
                            </Box>
                        </Text>
                    </Box> */}
                    {/* RIGHT FORM */}
                    <Box
                        w="420px"
                        bg="white"
                        p={10}
                        rounded="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        boxShadow="0 12px 40px rgba(0,0,0,0.04)"
                    >
                        <Heading size="xl" mb={2}>
                            Create account with mobile
                        </Heading>

                        <Text fontSize={14} color="gray.500" mb={8}>
                            Register using your mobile number, verify with OTP,
                            or continue with Google.
                        </Text>

                        {/* Mobile Input */}
                        <Box mb={5}>
                            <Text fontSize={14} fontWeight="500" mb={2}>
                                Mobile number
                            </Text>
                            <Input placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Box>

                        <Button
                            w="100%"
                            bg="#0071c2"
                            color="white"
                            _hover={{ bg: "#005fa3" }}
                            mb={5}
                            onClick={sendOtp}
                        >
                            {sendloading ? <Spinner size="sm" /> : "Send OTP"}
                        </Button>

                        {/* OTP */}
                        <Box mb={5}>
                            <Text fontSize={14} fontWeight="500" mb={2}>
                                Enter OTP
                            </Text>

                            {/* <HStack gap={2}>
                                {[...Array(6)].map((_, i) => (
                                    <Input
                                        key={i}
                                        textAlign="center"
                                        maxW="48px"
                                    />
                                ))}
                            </HStack> */}
                            <PinInput.Root value={otp} onValueChange={(e) => {
                                const newValue = Array(OTP_LENGTH).fill("")
                                e.value.forEach((digit, index) => {
                                    newValue[index] = digit
                                })
                                setOtp(newValue)
                            }}>
                                <PinInput.HiddenInput />
                                <PinInput.Control>
                                    <PinInput.Input index={0} />
                                    <PinInput.Input index={1} />
                                    <PinInput.Input index={2} />
                                    <PinInput.Input index={3} />
                                    <PinInput.Input index={4} />
                                    <PinInput.Input index={5} />
                                </PinInput.Control>
                            </PinInput.Root>
                        </Box>

                        <Button
                            w="100%"
                            bg="primary.500"
                            color="white"
                            _hover={{ bg: "#005fa3" }}
                            onClick={verifyOtp}
                        >
                            {verifyloading ? <Spinner size="sm" /> : "Verify & Continue"}

                        </Button>

                        <Separator my={8} />

                        <Button
                            w="100%"
                            variant="outline"
                            mb={4}
                        >
                            Continue with Google <FaChrome />
                        </Button>
                        <div id="recaptcha-container"></div>

                        <Text fontSize={14} textAlign="center" color="gray.500" mt={4}>
                            Already have an account?{" "}
                            <Text as="span" color='primary.500' fontWeight="600" cursor="pointer">
                                Sign in
                            </Text>
                        </Text>
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
};

export default Page;
const InfoItem = ({
    description,
    desc,
    icon
}: {
    description: string;
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
            <Heading size="md">{description}</Heading>
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
