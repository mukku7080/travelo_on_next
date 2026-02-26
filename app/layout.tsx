"use client"

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../thems/theme";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
// import { Provider } from "@/components/ui/provider"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <ChakraProvider value={system} >
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
