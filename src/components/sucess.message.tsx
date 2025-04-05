import { Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MessageProps {
  text: string;
}

export default function SuccessMessage({ text }: MessageProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="py-3 px-4 bg-green-50 border border-green-200 rounded-md flex gap-3 items-center"
      >
        <div className="p-2 text-white bg-green-600 rounded-full font-bold">
          <Check size={20} />
        </div>
        <p className="text-green-700 font-medium text-sm">{text}</p>
      </motion.div>
    </AnimatePresence>
  );
}
