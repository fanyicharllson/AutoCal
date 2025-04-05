import { motion } from "framer-motion";
import { useState } from "react";
import ShowModal from "./showModal";
import { Modal } from "./Main.modal.component";
import About from "../pages/about";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  return (
    <>
      {/* show Modal */}
      <ShowModal isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Show about modal */}
      <Modal
        isOpen={showAbout}
        onClose={() => setShowAbout(false)}
        title="About AutoCal"
      >
        <About />
      </Modal>

      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:p-5 max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 font-bold text-green-600 text-2xl cursor-pointer hover:outline hover:outline-2 hover:outline-green-600 hover:rounded-md px-2 py-1 transition duration-300 ">
            AutoCal
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <span
              className="text-gray-600 cursor-pointer hover:text-green-500"
              onClick={() => setShowAbout(true)}
            >
              About
            </span>
            <button
              className="border-btn-style"
              onClick={() => setIsOpen(true)}
            >
              Generate Now
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}
