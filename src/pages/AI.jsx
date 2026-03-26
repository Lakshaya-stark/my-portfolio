import { useState } from "react";
import { motion } from "framer-motion";
import { themes } from "../data/theme";
import NeuralBackground from "../components/NeuralBackground";
import AIIntro from "../components/AIIntro";
import AnimatedText from "../components/AnimatedText";
import AIAscii from "../components/AIAscii";
export default function AI() {
  const theme = themes.ai;
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <AIIntro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div
      className={`${theme.bg} ${theme.text} min-h-screen relative overflow-hidden`}
    >
      <NeuralBackground />
      {/* BACKGROUND GLOW Not adding this now but not removing this ..... meri marzi*/}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(167,139,250,0.1),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.08),transparent_40%)]"></div> */}

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-20 space-y-32">
        {/* HERO */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* LEFT */}
          <AnimatedText
            text="Artificial Intelligence"
            className="text-4xl md:text-6xl font-bold"
          />

          <AnimatedText
            text="I design intelligent systems that can interpret, analyze, and act on visual data in real-time environments. My work focuses on building efficient pipelines for object detection, automation, and decision-making systems. From training models to optimizing performance, I work on bridging the gap between machine learning theory and real-world applications."
            className="text-2xl md:text-sm "
          />

          {/* RIGHT VISUAL */}
          <div className="relative flex items-center justify-center">
            {/* glow */}
            <div className="absolute w-[350px] h-[350px] bg-violet-500/10 blur-[120px] rounded-full"></div>

            {/* ascii */}
            <div className="relative z-10">
              <AIAscii />
            </div>
          </div>
        </section>

        {/* SKILLS / TECH */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-10">Technologies & Tools</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "OpenCV",
              "YOLO",
              "Python",
              "Deep Learning",
              "Real-time Detection",
              "Model Optimization",
            ].map((item) => (
              <div
                key={item}
                className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-violet-400/40 to-transparent"
              >
                <div className="bg-[#1f2937] rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-violet-400/10 blur-2xl"></div>

                  <h3 className="text-lg font-semibold relative z-10">
                    {item}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* PROJECT SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-10">AI Projects</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-violet-400/40 to-transparent">
              <div className="bg-[#1f2937] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-violet-400/10 blur-2xl"></div>

                <h3 className="text-xl font-semibold relative z-10">
                  Helmet Detection System
                </h3>

                <p className="text-violet-300/80 mt-3 relative z-10">
                  YOLO-based real-time detection system for identifying safety
                  compliance in construction environments.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
