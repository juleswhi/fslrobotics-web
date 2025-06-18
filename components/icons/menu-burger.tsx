import * as React from "react";

import { motion } from "framer-motion";


export const MenuBurger: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="white"
      initial="closed"
    >
      <motion.rect x="3" y="5" rx="1" ry="1" width="18" height="2"
        variants={{
          open: { rotate: 45, y: 6 },
          closed: { rotate: 0, y: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
        initial={false}
      />
      <motion.rect x="3" y="11" rx="1" ry="1" width="18" height="2"
        variants={{
          open: { scale: 0 },
          closed: { scale: 1 },
        }}
        animate={isOpen ? "open" : "closed"}
        initial={false}
      />
      <motion.rect x="3" y="17" rx="1" ry="1" width="18" height="2"
        variants={{
          open: { rotate: -45, y: -6 },
          closed: { rotate: 0, y: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
        initial={false}
      />
    </motion.svg>
  );
};
