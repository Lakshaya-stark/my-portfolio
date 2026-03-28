import { motion } from "framer-motion";

export default function Crows() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -200, y: Math.random() * 500, opacity: 0 }}
          animate={{
            x: window.innerWidth + 200,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "linear",
          }}
          className="absolute text-red-500 text-xl"
        >
          🐦
        </motion.div>
      ))}
    </div>
  );
}
