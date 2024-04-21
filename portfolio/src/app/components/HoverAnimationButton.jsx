import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const HoverAnimationButton = ({ children, ...rest }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Button {...rest}>{children}</Button>
    </motion.div>
  );
};

export default HoverAnimationButton;