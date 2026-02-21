import React from "react";
import { motion } from "framer-motion";
import "../../styles/hero.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero: React.FC = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <section className="hero">
      <motion.div
        className="hero-bg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />

      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={fadeUp} className="hero-title">
          Embark On Your Business Journey With{" "}
          <span className="highlight">Corporate Desk</span> Today
        </motion.h1>

        <motion.p variants={fadeUp} className="hero-subtitle">
          View our comprehensive business registration and legal compliance services to help you
          establish and maintain your business with confidence.
        </motion.p>

        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hero-button"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* <motion.button
        className="scroll-top"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ y: -4 }}
      >
        ↑
      </motion.button> */}
    </section>
  );
};

export default Hero;