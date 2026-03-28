import { motion } from "framer-motion";
import Sharingan from "../components/Sharingan";

const projects = [
  {
    name: "Portfolio Website",
    desc: "Modern React + Tailwind portfolio",
    link: "https://github.com/yourrepo1",
  },
  {
    name: "Resume Screener",
    desc: "AI-based resume filtering system",
    link: "https://github.com/yourrepo2",
  },
  {
    name: "Real-time Chat App",
    desc: "WebSocket based messaging system",
    link: "https://github.com/yourrepo3",
  },
];

export default function Web() {
  return (
    <div className="min-h-screen bg-black text-red-400 relative overflow-hidden">
      {/* BACKGROUND SMOKE / AURA */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-red-500/10 blur-[120px] top-0 right-0"></div>
        <div className="absolute w-[400px] h-[400px] bg-red-900/10 blur-[100px] bottom-0 left-0"></div>
      </div>

      {/* OPTIONAL SUBTLE FLICKER */}
      <div className="absolute inset-0 opacity-10 animate-[flicker_0.2s_infinite] pointer-events-none"></div>

      <div className="relative z-10 flex">
        {/* SIDEBAR SPACE */}
        <div className="w-64 hidden md:block"></div>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-10 py-16">
          {/* HERO */}
          <div className="flex justify-between items-start">
            {/* LEFT TEXT */}
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold mb-6 tracking-wide">
                Web Development
              </h1>

              <p className="text-red-300/80 leading-relaxed">
                Crafting modern web applications with performance, scalability,
                and clean architecture in mind. Focused on building intuitive
                user experiences with strong backend integration.
              </p>
            </div>

            {/* RIGHT AVATAR */}
            <div className="relative">
              <Sharingan />
            </div>
          </div>

          {/* PROJECTS */}
          <div className="mt-32 space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-end"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-[500px] bg-[#0a0a0a] border border-red-500/30 rounded-xl p-6 hover:border-red-500 transition duration-300 hover:scale-[1.02]"
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500/10 blur-2xl transition"></div>

                  {/* content */}
                  <h3 className="text-xl font-semibold mb-2 relative z-10">
                    {project.name}
                  </h3>

                  <p className="text-red-300/70 text-sm relative z-10">
                    {project.desc}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
