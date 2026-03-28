import { motion } from "framer-motion";

export default function HUDCore({ active }) {
  return (
    <div className="relative w-[260px] h-[260px] flex items-center justify-center">
      <motion.div
        animate={{ rotate: active ? 360 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute w-full h-full border border-cyan-400/30 rounded-full"
      />

      <div className="absolute w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full"></div>

      <div className="w-5 h-5 bg-cyan-400 rounded-full"></div>
    </div>
  );
}
