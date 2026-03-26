import { motion } from "framer-motion";
import { themes } from "../data/theme";

export default function Home() {
  const theme = themes.home;

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
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href="#" className="relative group">
                <span className="group-hover:text-[#d4af37] transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md bg-[#d4af37]/20 transition"></span>
              </a>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-16">
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-10">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#18181b] border border-[#2a2a2e] p-6 rounded-2xl hover:border-[#d4af37] transition">
              <h3 className="text-xl font-semibold">Helmet Detection</h3>
              <p className="text-zinc-400 mt-3">
                YOLO-based system to detect safety violations in real-time.
              </p>
            </div>

            <div className="bg-[#18181b] border border-[#2a2a2e] p-6 rounded-2xl hover:border-[#d4af37] transition">
              <h3 className="text-xl font-semibold">Resume Screener</h3>
              <p className="text-zinc-400 mt-3">
                AI tool for filtering candidates based on job requirements.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
