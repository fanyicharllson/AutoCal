import { motion } from "framer-motion";
import { useState } from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import ShowModal from "./showModal";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

function WelcomePageComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* show Modal */}
      <ShowModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Welcom screen content */}
      <div className="relative min-h-screen flex items-center flex-col justify-center z-20">
        <div className="absolute gradient-bg z-0" />

        {/* Navbar */}
        <NavBar />

        {/* Welcome content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-20 text-center pt-4 flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold text-green-600"
          >
            AutoCal – Effortless Calendar Generator
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-sm text-gray-500 mt-2 max-w-lg mx-auto"
          >
            Tired of manual scheduling? Welcome to AutoCal, An application that
            automates calendar creation, saving you time and keeping you
            organized.
          </motion.p>
          {/* motion btn */}
          <motion.button
            variants={itemVariants}
            className="mt-4 px-4 py-2 btn-style"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
          >
            Generate Now
          </motion.button>
        </motion.div>
        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default WelcomePageComponent;
