import { ComponentProps } from "react";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

type TrashIcon = ComponentProps<typeof motion.button>;

const TrashIcon = ({ ...props }: TrashIcon) => {
  return (
    <motion.button
      className="text-base md:text-lg"
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: [-2, 2, -2, 2, 0] }}
    >
      <FaTrash className="text-red-500" />
    </motion.button>
  );
};

export default TrashIcon;
