import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Headings from "../components/Headings";
import ReactImg from "@/assets/skills/ReactImg";
import ReduxImg from "@/assets/skills/ReduxImg";
import Image from "next/image";

const skills=[
  {
    id:1,
    title:"React",
    img_url:ReactImg
  },
  {
    id:2,
    title:"Redux",
    img_url:ReduxImg
  }
]

const Skill = () => {
  return (
    <Box w="95%" h="20rem" border="1px solid red" id="skill" m="auto">
      <Flex justifyContent="center" flexDir="column" alignItems="center">
        <Headings head="Skills" />
        <Box borderBottom="5px solid #7843e8" width="10%" mt="5px"></Box>
      </Flex>

      <SimpleGrid columns={[1,2,3,4,5]} spacing="40px" mt="1rem">
        {
          skills.map((item,ind) => {
            console.log("item",item)
            return(
              <Box bg="tomato" height="80px" key={item.id}>
                <Text>{item.title}</Text>
                {item.img_url}
              </Box>

            )
          })
        }
      </SimpleGrid>
    </Box>
  );
};

export default Skill;
