import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Container,
  VStack,
  HStack,
  Icon,
  Checkbox,
  Separator,
} from "@chakra-ui/react";
import {
  UserPlus,
  BadgePercent,
  ShieldCheck,
  Chrome,
} from "lucide-react";

export default function CreateAccountPage() {
  return (
    <Box bg="#f7fbff" minH="100vh">
     

      {/* MAIN SECTION */}
      <Flex
        align="center"
        justify="center"
        py={20}
      >
        <Container maxW="1200px">
          <Flex gap={20} align="center">
            
            {/* LEFT INFO */}
            <Box flex="1" maxW="520px">
              <Heading
                fontSize="40px"
                fontWeight="800"
                mb={12}
                lineHeight="1.15"
              >
                Create your Booking.com account
              </Heading>

              <VStack gap={10} align="stretch">
                {[
                  {
                    icon: UserPlus,
                    title: "Manage all your bookings",
                    desc: "View, change, or cancel your stays and trips anytime.",
                  },
                  {
                    icon: BadgePercent,
                    title: "Unlock Genius rewards",
                    desc: "Get instant discounts and exclusive member deals.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Secure and fast checkout",
                    desc: "Save details safely and book faster every time.",
                  },
                ].map((item, index) => (
                  <HStack key={index} align="flex-start" gap={6}>
                    <Flex
                      w="56px"
                      h="56px"
                      bg="#e9f5ff"
                      rounded="full"
                      align="center"
                      justify="center"
                    >
                      <Icon as={item.icon} color="#0071c2" />
                    </Flex>

                    <Box>
                      <Text fontWeight="700" fontSize="18px" mb={1}>
                        {item.title}
                      </Text>
                      <Text color="gray.500">
                        {item.desc}
                      </Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* RIGHT FORM */}
            <Box
              w="480px"
              bg="white"
              p={10}
              rounded="lg"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="0 12px 40px rgba(0,0,0,0.04)"
            >
              <Heading size="md" mb={2}>
                Create account with mobile
              </Heading>

              <Text color="gray.500" mb={8}>
                Register using your mobile number, verify with OTP,
                or continue with Google.
              </Text>

              {/* Mobile Input */}
              <Box mb={5}>
                <Text fontWeight="600" mb={2}>
                  Mobile number
                </Text>
                <Input placeholder="+91 98765 43210" />
              </Box>

              <Button
                w="100%"
                bg="#0071c2"
                color="white"
                _hover={{ bg: "#005fa3" }}
                mb={5}
              >
                Send OTP
              </Button>

              {/* OTP */}
              <Box mb={5}>
                <Text fontWeight="600" mb={2}>
                  Enter OTP
                </Text>

                <HStack gap={2}>
                  {[...Array(6)].map((_, i) => (
                    <Input
                      key={i}
                      textAlign="center"
                      maxW="48px"
                    />
                  ))}
                </HStack>
              </Box>

              <Button
                w="100%"
                bg="#0071c2"
                color="white"
                _hover={{ bg: "#005fa3" }}
              >
                Verify & Continue
              </Button>

              <Separator my={8} />

              <Button
                w="100%"
                variant="outline"
                // leftIcon={<Icon as={Chrome} />}
                mb={4}
              >
                Continue with Google
              </Button>

              <Text textAlign="center" color="gray.500" mt={4}>
                Already have an account?{" "}
                <Text as="span" color="#0071c2" fontWeight="600" cursor="pointer">
                  Sign in
                </Text>
              </Text>
            </Box>
          </Flex>
        </Container>
      </Flex>
    </Box>
  );
}