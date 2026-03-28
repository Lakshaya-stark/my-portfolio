import { motion } from "framer-motion";

export default function HUDLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {/* STATIC LINES */}
      <line x1="35%" y1="40%" x2="50%" y2="50%" stroke="rgba(0,255,255,0.25)" />
      <line x1="35%" y1="60%" x2="50%" y2="50%" stroke="rgba(0,255,255,0.25)" />
      <line x1="65%" y1="40%" x2="50%" y2="50%" stroke="rgba(0,255,255,0.25)" />
      <line x1="65%" y1="60%" x2="50%" y2="50%" stroke="rgba(0,255,255,0.25)" />

      {/* DATA FLOW (slower = less load) */}
      <motion.circle
        cx="35%"
        cy="40%"
        r="2"
        fill="cyan"
        animate={{ cx: ["35%", "50%"], cy: ["40%", "50%"] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      <motion.circle
        cx="65%"
        cy="40%"
        r="2"
        fill="cyan"
        animate={{ cx: ["65%", "50%"], cy: ["40%", "50%"] }}
        transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
      />

      <motion.circle
        cx="35%"
        cy="60%"
        r="2"
        fill="cyan"
        animate={{ cx: ["35%", "50%"], cy: ["60%", "50%"] }}
        transition={{ repeat: Infinity, duration: 3, delay: 1 }}
      />

      <motion.circle
        cx="65%"
        cy="60%"
        r="2"
        fill="cyan"
        animate={{ cx: ["65%", "50%"], cy: ["60%", "50%"] }}
        transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
      />
    </svg>
  );
}
