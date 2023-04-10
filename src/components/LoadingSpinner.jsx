import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  const spinnerImg = "/assets/emojis/silly.png";

  const spinVariants = {
    animate: {
      rotate: [0, 225, 360],
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="flex h-full items-center justify-center">
      <motion.img
        src={spinnerImg}
        alt="Loading spinner"
        variants={spinVariants}
        animate="animate"
        className="my-4 h-24 w-24"
      />
    </div>
  );
};

export default LoadingSpinner;
