import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    viewport: "once",
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function PerfectSection({ title, subtitle, features }) {
  return (
    <div id="features" className="bg-white">
      <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-4 lg:max-w-7xl lg:px-8 lg:pt-24">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="max-w-3xl mt-4 text-lg text-slate-800">{subtitle}</p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
        >
          {features.map((feature) => (
            <motion.div key={feature.name} variants={item}>
              <div>
                <span className="flex items-center justify-center w-12 h-12 rounded-xl drop-shadow-lg bg-[#DB4327]">
                  <feature.icon
                    className="w-6 h-6 text-yellow-50"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-slate-800">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-slate-700">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
