import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center flex-col justify-center z-20">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-green-200 z-0" />
      <div className="z-20 text-center pt-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold text-green-600 animate-bounce">
          404
        </h1>
        <p className="text-lg font-semibold animate-pulse">
          Oops Sorry! Page Not available.
        </p>
        <div className="pt-4">
          <motion.button
            className="btn-style px-4 py-2 flex items-center"
            onClick={() => navigate("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft />
            Back to home
          </motion.button>
        </div>
      </div>
    </div>
  );
}
