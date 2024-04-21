import { Box, Button, Center, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Headings from '../components/Headings'
import Ibankey from "../../assets/projectImg/Ibankey.png"
import Image from 'next/image'
import Paragraph from '../components/Paragraph'

const projects= [
  {
    id:1,
    title:"Ibankey",
    description:"Ibankey is a fintech platform, we revolutionize fund-raising for institutional borrowers, bridging the gap between them and lenders. Our mission is to make the complex world of fund-raising faster, easier, and more accessible. With our proprietary technology, we're not just a platform; we're a partner in your financial journey. Join us as we pave the way for a new era of financial opportunities.",
    img_url:Ibankey

  },
   {
    id:1,
    title:"Ibankey",
    description:"Ibankey is a fintech platform, we revolutionize fund-raising for institutional borrowers, bridging the gap between them and lenders. Our mission is to make the complex world of fund-raising faster, easier, and more accessible. With our proprietary technology, we're not just a platform; we're a partner in your financial journey. Join us as we pave the way for a new era of financial opportunities.",
    img_url:Ibankey

  },
  {
    id:1,
    title:"Ibankey",
    description:"Ibankey is a fintech platform, we revolutionize fund-raising for institutional borrowers, bridging the gap between them and lenders. Our mission is to make the complex world of fund-raising faster, easier, and more accessible. With our proprietary technology, we're not just a platform; we're a partner in your financial journey. Join us as we pave the way for a new era of financial opportunities.",
    img_url:Ibankey

  },
  {
    id:1,
    title:"Ibankey",
    description:"Ibankey is a fintech platform, we revolutionize fund-raising for institutional borrowers, bridging the gap between them and lenders. Our mission is to make the complex world of fund-raising faster, easier, and more accessible. With our proprietary technology, we're not just a platform; we're a partner in your financial journey. Join us as we pave the way for a new era of financial opportunities.",
    img_url:Ibankey

  },
  {
    id:1,
    title:"Ibankey",
    description:"Ibankey is a fintech platform, we revolutionize fund-raising for institutional borrowers, bridging the gap between them and lenders. Our mission is to make the complex world of fund-raising faster, easier, and more accessible. With our proprietary technology, we're not just a platform; we're a partner in your financial journey. Join us as we pave the way for a new era of financial opportunities.",
    img_url:Ibankey

  },

]

const Projects = () => {
  return (
    <Box width="95%" m="auto">
        <Flex justifyContent="center" flexDir="column" alignItems="center">
          <Headings head="Projects"/>
          <Box borderBottom="5px solid #7843e8" width="10%" mt="5px"></Box>
          </Flex> 
          {/* projects    */}
          <SimpleGrid columns={[1]} spacing='40px' mt={10} >
            {
              projects.map((item,index) => {
                return(
                  <Flex key={item.id} gap={50} boxShadow="xl" p={10} flexDir={["column","row"]}>
                    <Box w={["100%","45%"]}>
                    <Image src={item.img_url} alt='Naquee' width="100%"/>
                    </Box>
                    <Box w={["100%","47%"]}>
                      <Headings head={item.title}/>
                      <br />
                      <Paragraph>{item.description}</Paragraph>
                      <Flex>
                        <Box>
                          <Flex flexWrap="wrap" justifyContent="space-between" mt="1rem" gap={["5px","1rem"]} fontWeight="600">
                            <Text color="#7843e8" mr="10px" fontWeight="bold" whiteSpace="nowrap">Tech-Stack :</Text>
                            <Box variant="outline" whiteSpace="nowrap">React</Box>
                            <Box variant="outline" whiteSpace="nowrap">Redux</Box>
                            <Box variant="outline" whiteSpace="nowrap">Redux-Toolkit</Box>
                            <Box variant="outline" whiteSpace="nowrap">Tailwind</Box>
                            <Box variant="outline" whiteSpace="nowrap">Google Firebase</Box>
                            <Box variant="outline" whiteSpace="nowrap">.Net</Box>
                            <Box variant="outline" whiteSpace="nowrap">Chakra-Ui</Box>
                          </Flex>
                          <Flex p="1rem">
                            <Button variant="outline" colorScheme="teal">Live Source</Button>
                          </Flex>

                        </Box>
                        <Box></Box>
                      </Flex>

                    </Box>
                  </Flex>
                )
              })
            }
</SimpleGrid>
    </Box>
  )
}

export default Projects
