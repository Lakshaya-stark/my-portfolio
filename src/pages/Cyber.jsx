import { motion } from "framer-motion";
import { themes } from "../data/theme";
import { useState } from "react";
import CyberIntro from "../components/CyberIntro";

// export default function Cyber() {

// 👉 After animation ends → show actual page
//   return (
//     <div className="min-h-screen bg-black text-green-400 flex items-center justify-center">
//       <h1 className="text-4xl font-bold">Cybersecurity Page 🚀</h1>
//     </div>
//   );
// }

export default function Cyber() {
  const theme = themes.cyber;
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <CyberIntro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div
      className={`${theme.bg} ${theme.text} min-h-screen relative overflow-hidden`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.05),transparent_40%)]"></div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 space-y-32">
        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="w-10 h-[2px] bg-green-500 mb-6"></div>

            <h1 className="text-4xl md:text-6xl font-bold">Cybersecurity</h1>

            <p className="mt-6 text-green-300/80">
              Hands-on experience in network analysis, vulnerability assessment,
              and exploitation workflows using real-world tools.
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute w-[350px] h-[350px] bg-green-500/10 blur-[100px] rounded-full"></div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-[260px] md:w-[320px] h-[260px] md:h-[320px] bg-gradient-to-br from-green-900 to-black rounded-full"
            />
          </motion.div>
        </section>

        {/* SKILLS / TOOLS */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-10">Tools & Expertise</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Nmap",
              "Wireshark",
              "Metasploit",
              "BeEF",
              "Ng Suite",
              "Custom Python Tools",
            ].map((tool) => (
              <div
                key={tool}
                className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-green-500/40 to-transparent"
              >
                <div className="bg-[#111827] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-green-500/10 blur-2xl"></div>

                  <h3 className="text-lg font-semibold relative z-10">
                    {tool}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* DESCRIPTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">What I Do</h2>

          <p className="text-green-300/80 max-w-3xl leading-relaxed">
            I explore system vulnerabilities, analyze network traffic, and build
            custom tools to automate security workflows. My focus is on
            practical, real-world security rather than theory.
          </p>
        </motion.section>
      </div>
    </div>
  );
}
