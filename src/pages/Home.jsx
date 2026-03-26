import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { themes } from "../data/theme";

export default function Home() {
  const theme = themes.home;
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${theme.bg} ${theme.text} min-h-screen relative overflow-hidden`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.04),transparent_40%)]"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 py-20 space-y-32">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#d4af37] rounded-full"></div>
            <span className="text-sm tracking-wide">Stark</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm text-zinc-400">
            {[
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Skills", id: "domains" },
              { label: "Contact", id: "domains" }, // temp
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="relative group"
              >
                <span className="group-hover:text-[#d4af37] transition">
                  {item.label}
                </span>

                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md bg-[#d4af37]/20 transition"></span>
              </button>
            ))}
          </div>
        </nav>
        {/* HERO */}
        <section
          id="home"
          className="flex flex-col md:flex-row items-center justify-between gap-16"
        >
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              className="w-10 h-[2px] bg-[#d4af37] mb-6"
            />

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl md:text-6xl font-bold"
            >
              Now it's new <br />
              <span className={theme.accent}>Stark</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="mt-6 text-zinc-400"
            >
              Full Stack Developer, Systems Engineer, and Cybersecurity
              Enthusiast.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-10 px-8 py-3 rounded-full border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition"
            >
              Explore Work
            </motion.button>
          </motion.div>

          <motion.img
            src="/hero.svg.png"
            alt="hero"
            className="w-[280px] md:w-[380px]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </section>
        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>

          <p className="text-zinc-400 max-w-3xl leading-relaxed">
            I am a multidisciplinary developer working across web technologies,
            embedded systems, cybersecurity, and AI. I build systems that
            combine performance, scalability, and security.
          </p>
        </motion.section>
        {/* PROJECTS */}

        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* PROJECT 1 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-[#d4af37]/40 to-transparent"
            >
              <div className="bg-[#18181b] rounded-2xl p-6 h-full relative overflow-hidden">
                {/* glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[#d4af37]/10 blur-2xl"></div>

                <h3 className="text-xl font-semibold relative z-10">
                  Helmet Detection System
                </h3>

                <p className="text-zinc-400 mt-3 relative z-10">
                  Real-time YOLO-based system to detect helmet compliance and
                  trigger alerts.
                </p>

                <div className="mt-6 text-sm text-[#d4af37] relative z-10">
                  YOLO • OpenCV • Python • Docker
                </div>
              </div>
            </motion.div>

            {/* PROJECT 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-[#d4af37]/40 to-transparent"
            >
              <div className="bg-[#18181b] rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[#d4af37]/10 blur-2xl"></div>

                <h3 className="text-xl font-semibold relative z-10">
                  Resume Screener
                </h3>

                <p className="text-zinc-400 mt-3 relative z-10">
                  AI-powered system to shortlist candidates based on job
                  requirements.
                </p>

                <div className="mt-6 text-sm text-[#d4af37] relative z-10">
                  React • Node • AI • NLP
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Domain */}
        <motion.section
          id="domains"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-12">Explore My Work</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WEB */}
            <div
              onClick={() => navigate("/web")}
              className="group cursor-pointer relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 to-transparent"
            >
              <div className="bg-[#18181b] rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-400/10 blur-2xl"></div>

                <h3 className="text-lg font-semibold relative z-10">
                  Web Development
                </h3>

                <p className="text-zinc-400 mt-2 text-sm relative z-10">
                  React, Tailwind, full-stack apps
                </p>
              </div>
            </div>

            {/* CYBER */}
            <div
              onClick={() => navigate("/cybersecurity")}
              className="group cursor-pointer relative rounded-2xl p-[1px] bg-gradient-to-br from-green-500/40 to-transparent"
            >
              <div className="bg-[#18181b] rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-green-500/10 blur-2xl"></div>

                <h3 className="text-lg font-semibold relative z-10">
                  Cybersecurity
                </h3>

                <p className="text-zinc-400 mt-2 text-sm relative z-10">
                  Networking, tools, exploitation
                </p>
              </div>
            </div>

            {/* SYSTEMS */}
            <div
              onClick={() => navigate("/systems")}
              className="group cursor-pointer relative rounded-2xl p-[1px] bg-gradient-to-br from-sky-400/40 to-green-400/40"
            >
              <div className="bg-[#18181b] rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-sky-400/10 blur-2xl"></div>

                <h3 className="text-lg font-semibold relative z-10">Systems</h3>

                <p className="text-zinc-400 mt-2 text-sm relative z-10">
                  Arduino, Raspberry Pi, low-level
                </p>
              </div>
            </div>

            {/* AI */}
            <div
              onClick={() => navigate("/ai")}
              className="group cursor-pointer relative rounded-2xl p-[1px] bg-gradient-to-br from-violet-400/40 to-transparent"
            >
              <div className="bg-[#18181b] rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-violet-400/10 blur-2xl"></div>

                <h3 className="text-lg font-semibold relative z-10">AI / CV</h3>

                <p className="text-zinc-400 mt-2 text-sm relative z-10">
                  YOLO, OpenCV, detection systems
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
