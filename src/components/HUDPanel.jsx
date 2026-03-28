import { motion } from "framer-motion";

export default function HUDPanel({ title, desc, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative w-[220px] h-[100px] flex items-center border border-cyan-400/30 rounded-lg bg-black/40 backdrop-blur transition hover:border-cyan-400 cursor-pointer"
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-400/10 blur-xl transition rounded-lg"></div>

      {/* content */}
      <div className="px-4 z-10">
        <h3 className="text-cyan-300 font-semibold">{title}</h3>
        <p className="text-cyan-200/60 text-sm">{desc}</p>
      </div>

      {/* pulse */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 border border-cyan-400 rounded-lg animate-ping"></div>
    </motion.div>
  );
}
