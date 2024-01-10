import React from "react";

import { motion } from "framer-motion";

export default function AnimateIn({ children, className, ...props }) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
