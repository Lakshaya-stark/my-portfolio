import { motion } from "framer-motion";
import { useEffect } from "react";

export default function CyberIntro({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
      {/* EXPANDING FLASH */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 6 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        className="absolute w-40 h-40 rounded-full bg-green-500/10 blur-3xl"
      />

      {/* MAIN PORTAL */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 2.2, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="relative flex items-center justify-center"
      >
        {/* OUTER ROTATING RING */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute w-72 h-72 border border-green-500/30 rounded-full"
        />

        {/* DASHED RING */}
        <motion.svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="absolute"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <circle
            cx="150"
            cy="150"
            r="120"
            stroke="#22c55e"
            strokeWidth="1.2"
            fill="none"
            strokeDasharray="6 12"
          />
        </motion.svg>

        {/* PULSE RINGS */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.5, opacity: 0.6 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
            className="absolute w-40 h-40 border border-green-500/40 rounded-full"
          />
        ))}

        {/* INNER CORE */}
        <div className="w-32 h-32 rounded-full bg-green-500/20 blur-2xl" />

        {/* CENTER CORE */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute w-16 h-16 rounded-full border border-green-400"
        />
      </motion.div>
    </div>
  );
}
