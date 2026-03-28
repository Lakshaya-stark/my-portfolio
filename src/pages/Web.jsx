import { motion } from "framer-motion";

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
    <div className="min-h-screen  bg-black text-red-400 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,0,0,0.15),transparent_40%)]"></div>

      <div className="relative z-10 flex">
        {/* SIDEBAR SPACE */}
        <div className="w-64 hidden md:block"></div>

        {/* MAIN */}
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
              <div className="w-64 h-64 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <span className="text-red-500/60 text-sm">ANIME AVATAR</span>
              </div>

              {/* subtle glow */}
              <div className="absolute inset-0 blur-3xl bg-red-500/10 rounded-full"></div>
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
                  className="group relative w-[500px] bg-[#0a0a0a] border border-red-500/30 rounded-xl p-6 hover:border-red-500 transition"
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-500/10 blur-2xl transition"></div>

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
