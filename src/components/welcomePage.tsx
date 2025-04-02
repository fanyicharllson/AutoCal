import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./modal.component";

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
      {/* Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Generate your Calender now"
        footer={
          <>
            <button
              className="btn-style py-2 px-4 hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              Generate
            </button>
            <button
              className="border-btn-style hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
          </>
        }
      >
        <p>This is an example of using the reusable Modal component.</p>
        <p className="mt-2">You can close it by:</p>
        <ul className="list-disc pl-5 mt-1">
          <li>Clicking the X button</li>
          <li>Clicking outside the modal</li>
          <li>Pressing the ESC key</li>
        </ul>
      </Modal>

      {/* Welcom screen content */}
      <div className="relative min-h-screen flex items-center flex-col justify-center z-20">
        <div className="absolute gradient-bg z-0" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:p-5 max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 font-bold text-green-600 text-lg cursor-pointer hover:outline hover:outline-2 hover:outline-green-600 hover:rounded-md px-2 py-1 transition duration-300 ">
              AutoCal
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-600 cursor-pointer hover:text-green-500">
                About
              </span>
              <button className="border-btn-style">Generate Now</button>
            </div>
          </motion.div>
        </div>

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
        <footer className="absolute bottom-0 left-0 right-0 flex justify-center items-center p-4 md:p-5 max-w-5xl mx-auto z-10">
          <div className="flex flex-col items-center pt-4">
            <p className="text-sm text-gray-500 italic">
              &copy; Copyright 2025 AutoCal
            </p>
            <p className="text-sm text-gray-500 italic">All rights reserved</p>
            <p className="text-sm text-gray-500 italic">
              Made with ❤️ by CTO of AutoCal -{" "}
              <Link
                to="https://www.linkedin.com/in/fanyi-charllson-ab19492b8/"
                className="text-green-700 underline cursor-pointer text-sm"
              >
                Fanyi Charllson
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default WelcomePageComponent;
