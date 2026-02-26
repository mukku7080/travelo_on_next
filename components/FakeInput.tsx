import { Box, Text } from "@chakra-ui/react";

type FakeInputProps = {
    label: string;
    value: string;
    onClick: () => void;
};

export function FakeInput({ label, value, onClick }: FakeInputProps) {
    return (
        <Box
            border="1px solid"
            borderColor="gray.300"
            borderRadius="md"
            px={3}
            py={2}
            cursor="pointer"
            _hover={{ borderColor: "blue.500" }}
            onClick={onClick}
        >
            <Text fontSize="xs" color="gray.500">
                {label}
            </Text>
            <Text fontWeight="medium">{value}</Text>
        </Box>
    );
}
