"use client"
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./projects/page";
import Skill from "./skill/page";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <ChakraProvider>
        <Navbar/>
        <HeroSection/>
        <Projects/>
        <Skill/>
      </ChakraProvider>
    </main>
  );
}
