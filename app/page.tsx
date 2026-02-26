import Image from "next/image";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";
import SearchWidget from "../components/SearchWidget";
import { Offers } from "../components/Offer";
import TrendingDestinations from "../components/TrendingDestination";

export default function Home() {
  return (
      <Box minH={'100vh'} >
        <Hero />
        <SearchWidget />
        <Offers />
        <TrendingDestinations />
      </Box>
  );
}
