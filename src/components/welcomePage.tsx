import { motion } from "framer-motion";

function WelcomePageComponent() {
  return (
    <div className="relative min-h-screen flex items-center flex-col justify-center z-20">
      <div className="absolute gradient-bg z-0" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 md:p-5 max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 font-bold text-green-600 text-lg cursor-pointer hover:outline hover:outline-2 hover:outline-green-600 hover:rounded-md px-2 py-1 transition duration-300 "
        >
          AutoCal
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <span className="text-gray-600 cursor-pointer hover:text-green-500">About</span>
            <button className="border-2 border-green-600 px-4 text-sm py-2 rounded-md text-green-600">
              Generate Now
            </button>
          </div>
        </motion.div>
      </div>

      <div className="z-20 text-center pt-4 flex flex-col items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-green-600">
          AutoCal – Effortless Calendar Generator
        </h1>
        <p className="text-sm text-gray-500 mt-2 max-w-lg mx-auto">
          Tired of manual scheduling? Welcome to AutoCal, An application that
          automates calendar creation, saving you time and keeping you
          organized.
        </p>
      </div>
    </div>
  );
}

export default WelcomePageComponent;
