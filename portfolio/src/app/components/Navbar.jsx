"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Hamburger from "../../assets/Hamburger.";
import { useRouter } from 'next/navigation'

const NavItems = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },

  {
    id: 2,
    url: "/about",
    name: "About Me",
  },
  {
    id: 1,
    url: "/#skill", 
    name: "Skill",
  },
  {
    id: 1,
    url: "/contact",
    name: "Contact",
  },
  {
    id: 1,
    url: "/#projects",
    name: "Projects",
  },
];

const Navbar = () => {
  const router = useRouter()
  const [isScrolling, setIsScrolling] = useState(false);
  // console.log("isScrolling",isScrolling);
  const [mobile, setMobile] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY !== 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Box
      //   height="6rem"
      // bg={isScrolling?"red":"blue"}
      width="100%"
      // border="1px solid red"
      boxShadow="dark-lg"
      rounded="md"
      bg="white"
    >
      {/* for desktop */}
      <Flex
        p="1rem 3rem 1rem 3rem"
        justifyContent="space-between"
        display={["none", "flex"]}
      >
        <Box fontSize="20px" fontWeight="800">
          Naquee_.
        </Box>
        <Flex gap="1rem">
          {NavItems.map((item) => {
            return (
              <Button variant="outline" key={item.name} onClick={() => router.push(item.url)}>
                {item.name}
              </Button>
            );
          })}
        </Flex>
      </Flex>

      {/* for Mobile */}
      <Flex display={["block", "none"]} flexDir="column">
        <Box ref={btnRef} onClick={onOpen} p='0.5rem'>
          <Hamburger />
        </Box>
        <DrawerExample
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          btnRef={btnRef}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;

function DrawerExample({ isOpen, onOpen, onClose, btnRef }) {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          {NavItems.map((item, index) => {
            return (
              <Grid
                templateColumns="repeat(1, 1fr)"
                gap={6}
                textAlign="center"
                borderBottom="1px solid gray"
                py={[5,0]}
                px={[3,6]}
              >
                {
                  <GridItem w="100%" h="10">
                    {item.name}
                  </GridItem>
                }
              </Grid>
            );
          })}
        </DrawerContent>
      </Drawer>
    </>
  );
}
