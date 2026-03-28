import { motion } from "framer-motion";

export default function Sharingan() {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
      {/* outer glow */}
      <div className="absolute w-full h-full rounded-full bg-red-500/10 blur-3xl"></div>

      {/* rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute w-full h-full rounded-full border border-red-500/30"
      />

      {/* eye core */}
      <div className="w-40 h-40 rounded-full bg-black border border-red-500 flex items-center justify-center">
        {/* iris */}
        <div className="relative w-24 h-24 rounded-full bg-red-600 flex items-center justify-center">
          {/* tomoe dots */}
          <div className="absolute w-2 h-2 bg-black rounded-full top-2 left-1/2 -translate-x-1/2"></div>
          <div className="absolute w-2 h-2 bg-black rounded-full bottom-2 left-2"></div>
          <div className="absolute w-2 h-2 bg-black rounded-full bottom-2 right-2"></div>

          {/* pupil */}
          <div className="w-4 h-4 bg-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
