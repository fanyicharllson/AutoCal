import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) {
  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Modal Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 ease-in-out z-40"
          onClick={onClose}
        />
      )}

      {/* Modal */}
      <div
        className={`fixed left-1/2 z-50 md:w-full w-[90%]  max-w-md -translate-x-1/2 rounded-lg bg-white p-6 shadow-lg transition-all duration-500 ease-in-out ${
          isOpen
            ? "top-1/2 -translate-y-1/2 opacity-100"
            : "-top-full opacity-0"
        }`}
        aria-modal={isOpen}
        role="dialog"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="modal-title" className="text-xl font-semibold text-green-600">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-green-100 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5 text-green-700" />
          </button>
        </div>

        <div className="mb-6">{children}</div>

        {footer && <div className="flex justify-end gap-2">{footer}</div>}
      </div>
    </>
  );
}
