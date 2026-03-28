import { motion } from "framer-motion";
import { useEffect } from "react";

export default function HUDLoader({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 2200);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.8 }}
      transition={{ duration: 2 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="absolute w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full"></div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="w-40 h-40 border border-cyan-400/40 rounded-full"
      />

      <div className="absolute text-cyan-300 font-mono text-xl">
        GOOD TO SEE YOU, WELCOME BACK SIR
      </div>
    </motion.div>
  );
}
