import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Headings = ({head}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }}    // Animation when component mounts
      transition={{ duration: 0.5 }}      // Animation duration
    >
      <Heading size="xl">{head}</Heading>
    </motion.div>
  );
};

export default Headings;
