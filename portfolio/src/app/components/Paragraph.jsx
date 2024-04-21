import { Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from "framer-motion";

const Paragraph = ({children}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Initial animation state
    animate={{ opacity: 1, y: 0 }}   // Animation when component mounts
    transition={{ duration: 1 }}   // Animation duration
  >
    <Text fontSize="18px">{children}</Text> 
  </motion.div>
  )
}

export default Paragraph
