"use client"
import { Box, Flex, Button, Avatar, AvatarGroup } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const navigate = useRouter();
    return (
        <>
            <Box bg="#0664b1" color="white">
                <Flex
                    maxW="1100px"
                    mx="auto"
                    px={4}
                    py={3}
                    direction={{ base: "column", md: "row" }}
                    align={{ base: "flex-start", md: "center" }}
                    justify="space-between"
                    gap={{ base: 3, md: 0 }}
                >
                    <Box fontSize="xl" fontWeight="bold" cursor={"pointer"} onClick={() => navigate.push("/")}>
                        Travelo.com
                    </Box>
                    {/* <Image
                    src={travelo}
                    alt="Logo"
                    height="40px"
                    objectFit="cover"
                /> */}

                    <Flex
                        gap={3}
                        wrap="wrap"
                        justify={{ base: "flex-start", md: "flex-end" }}
                    >
                        <Button size="sm" bg={'primary.400'} color="white" >
                            INR
                        </Button>
                        <Button bg={'primary.400'}>

                            <AvatarGroup size={'xs'}>
                                <Avatar.Root colorPalette={'Primary'}>
                                    <Avatar.Fallback name="Mukesh rai" >
                                        {/* <Avatar.Image /> */}
                                    </Avatar.Fallback>
                                </Avatar.Root>

                            </AvatarGroup>
                        </Button>

                        <Link href="/list-property">
                            <Button size="sm" bg="primary.400" color="white">
                                List your property
                            </Button>
                        </Link>
                        <Button size="sm" bg={'white'} color={'primary.500'} onClick={() => navigate.push('/login')}>
                            Sign in
                        </Button>
                        <Button size="sm" bg={'white'} color={'primary.500'} onClick={() => navigate.push('/register')}>
                            Sign up
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
