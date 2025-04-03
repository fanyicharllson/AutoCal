import { motion } from "framer-motion";

interface OverlayProps {
  isOpen: boolean;
  onClose?: () => void;
}
export default function Overlay({ isOpen }: OverlayProps) {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out z-40"
          //   onClick={onClose}
        />
      )}
    </>
  );
}
