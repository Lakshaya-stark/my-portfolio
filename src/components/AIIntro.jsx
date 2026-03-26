import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AIIntro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* rotating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute w-40 h-40 border border-violet-400/30 rounded-full"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        className="absolute w-60 h-60 border border-violet-400/20 rounded-full"
      />

      {/* core */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 1 }}
        className="w-20 h-20 bg-violet-500/20 rounded-full blur-xl"
      />
    </div>
  );
}
