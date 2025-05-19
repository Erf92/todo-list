import { ComponentProps } from "react";
import { FaRegEdit } from "react-icons/fa";
import { motion } from "framer-motion";

type EditIcon = ComponentProps<typeof motion.button>;

const EditIcon = ({ ...props }: EditIcon) => {
  return (
    <motion.button
      className="text-base md:text-lg"
      {...props}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaRegEdit className="" />
    </motion.button>
  );
};

export default EditIcon;
