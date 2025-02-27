import React from "react";
import { motion } from "framer-motion";
import { CONTACT_CONTENT } from "../constants";
import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from "@remixicon/react";
import { section } from "framer-motion/client";
const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay,
    },
  }),
};
const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  }),
};
const Contact = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4
    md:px-10"
      id="contact"
    >
      <h2 className="text-4xl md: text-6x font-medium tracking-tight mb-10">
        Contact
      </h2>
      <div ClassName="h-1 w-20 bg-white mb-8"></div>
      <motion.h3
        className="text—6xl md: text-8xl leading-none"
        inttial="hidden"
        whileInView="visible"
        custom={0.4}
        variants={textVariants}
      >
        {CONTACT_CONTENT.headline}
      </motion.h3>
      <motion.p
        className="text-lg md:text-2xl mt—6 max-w-3x1"
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.description}
      </motion.p>
      <motion.div
  className="flex flex-col items-start space-y-4 mt-12 text-left"
  initial="hidden"
  whileInView="visible"
  custom={0.8}
  variants={textVariants}
>
  {/* Decorative Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-white bg-black/70 p-2 rounded-md">
    Let's Connect
  </h2>

  {/* Email Section */}
  <motion.a
    href={`mailto:${CONTACT_CONTENT.email}`}
    className="flex items-center space-x-3 px-6 py-3 bg-blue-100 text-blue-800 text-lg font-medium rounded-full shadow-md hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 12H8m12-8H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
      />
    </svg>
    <span>{CONTACT_CONTENT.email}</span>
  </motion.a>
</motion.div>
      <div className="flex space-x-6 mt-8">
        {CONTACT_CONTENT.socialLinks.map((link, index) => {
          const Icon =
            link.icon === "RiTwitterXFill"
              ? RiTwitterXFill
              : link.icon === "RiGithubFill"
              ? RiGithubFill
              : RiLinkedinFill;
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>
      <motion.p
        className="text-sm text-stone-400 mt-36"
        initial="hidden"
        whileInView="visible"
        custom={1.6}
        variants={textVariants}
      >
        {CONTACT_CONTENT.footerText}
      </motion.p>
    </section>
  );
};

export default Contact;
