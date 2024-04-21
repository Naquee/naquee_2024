import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import Naquee from "./Photo/Naquee.jpg";
// import Resume from "./Photo/Naquee_Resume.pdf"
import Image from "next/image";
import Headings from "./Headings";
import Paragraph from "./Paragraph";
import Github from "@/assets/Github";
import Linkedin from "@/assets/Lnikedin";
import HoverAnimationButton from "./HoverAnimationButton";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <Box
      w={["96%", "90%"]}
      m="auto"
      mt="1rem"
      display="flex"
      flexWrap="wrap"
    >
      <Box w={["100%", "65%"]} m="auto">
        <Flex justifyContent="center" marginTop="20px">
        <Headings head="Hi, I am Md Naquee Alam." />
        </Flex>
        <Box w={["100%","80%"]} p="6" m="auto">
        <Paragraph>
        A passionate Full Stack Software Developer 🚀 having a special interest in Frontend technologies and experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks." 
            </Paragraph>
            
        </Box>
   
        <Flex p="1rem" w={["95%", "35%"]}  margin="auto" justifyContent="space-between" pt="3rem" cursor="pointer">
        <motion.div whileHover={{ scale: 1.1 }}>
        <Link href='https://github.com/Naquee' isExternal>
          <Github />
          </Link>
          

          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
          <Link href='https://www.linkedin.com/in/naquee-alam/' isExternal>
          <Linkedin />
            </Link>

          </motion.div>

          <div style={{ display: "flex", justifyContent: "center", }}>
        {/* <a href="./Photo/Naquee_Resume.pdf" download> */}
        <HoverAnimationButton colorScheme="blue" variant='outline' w="120px" h="50px">Resume</HoverAnimationButton>
        {/* </a> */}
      </div>
        </Flex>
      </Box>
      <Box w={["100%", "30%"]} m="auto">
        <Image src={Naquee} alt="Naquee" width="100px" height="100px" />
      </Box>
    </Box>
  );
};

export default HeroSection;
