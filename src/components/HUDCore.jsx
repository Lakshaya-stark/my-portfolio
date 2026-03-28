import { motion } from "framer-motion";

export default function HUDCore() {
  return (
    <div className="relative w-[260px] h-[260px] flex items-center justify-center">
      {/* outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute w-full h-full border border-cyan-400/30 rounded-full"
      />

      {/* inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        className="absolute w-[180px] h-[180px] border border-cyan-400/20 rounded-full"
      />

      {/* glow */}
      <div className="absolute w-32 h-32 bg-cyan-400/20 blur-2xl rounded-full"></div>

      {/* core */}
      <div className="w-5 h-5 bg-cyan-400 rounded-full"></div>
    </div>
  );
}
