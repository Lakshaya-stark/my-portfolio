import { motion } from "framer-motion";

export default function ToolModal({ tool, onClose }) {
  if (!tool) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      {/* MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 bg-[#111827] border border-green-500/30 rounded-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold text-green-400">{tool.title}</h2>

        <p className="mt-4 text-green-300/80">{tool.description}</p>
      </motion.div>
    </div>
  );
}
