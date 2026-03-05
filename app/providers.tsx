"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import { emotionCache } from "./emotion-cache";
import { system } from "../thems/theme";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CacheProvider value={emotionCache}>
            <ChakraProvider value={system}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    );
}