import { useState } from "react";
import { motion } from "framer-motion";
import HUDPanel from "../components/HUDPanel";
import HUDLines from "../components/HUDLines";
import HUDCore from "../components/HUDCore";
import HUDLoader from "../components/HUDLoader";
import HUDContent from "../components/HUDContent";

export default function Web() {
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(null);

  if (loading) {
    return <HUDLoader onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="h-screen bg-black text-cyan-300 flex overflow-hidden">
      <div className="w-64 hidden md:block"></div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center">
          <HUDLines />

          <div className="grid grid-cols-3 w-full items-center">
            <div className="flex flex-col items-end space-y-8 pr-12">
              <HUDPanel
                title="Projects"
                desc="Frontend builds"
                onClick={() => setActive("projects")}
              />
              <HUDPanel
                title="Skills"
                desc="Tech stack"
                onClick={() => setActive("skills")}
              />
            </div>

            <div className="flex items-center justify-center h-[260px] relative">
              <motion.div
                animate={{
                  opacity: active ? 0 : 1,
                  scale: active ? 0.6 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <HUDCore active={active} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: active ? 1 : 0,
                  scale: active ? 1 : 0.8,
                }}
                transition={{ duration: 0.4 }}
                className="absolute text-center max-w-[300px]"
              >
                <HUDContent active={active} />
              </motion.div>
            </div>

            <div className="flex flex-col items-start space-y-8 pl-12">
              <HUDPanel
                title="Experience"
                desc="Work & learning"
                onClick={() => setActive("experience")}
              />
              <HUDPanel
                title="Contact"
                desc="Reach out"
                onClick={() => setActive("contact")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
