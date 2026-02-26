"use client"
import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                primary: {
                    400: { value: "#1a7fc8" },
                    500: { value: "#0071c2" },

                },
                secondary: {
                    500: { value: "#e9f5ff" },
                },
                footerdark: {
                    500: { value: "#00224f" }
                },
                background: {
                    500: { value: "#f7fbff" },
                },
                muted: {
                    500: { value: "#64748b" },
                },
                border: {
                    500: { value: "#e4e4e7" },
                }
            },

            fonts: {
                body: { value: "Inter, sans-serif" },
            },

            radii: {
                sm: { value: "4px" },
                md: { value: "6px" },
                lg: { value: "8px" },
            },
        },
    },
});
