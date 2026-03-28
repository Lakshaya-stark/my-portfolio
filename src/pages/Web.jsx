import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HUDCore from "../components/HUDCore";
import HUDPanel from "../components/HUDPanel";
import HUDLines from "../components/HUDLines";

export default function Web() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

  const handleClick = (route) => {
    if (active) return; // prevent spam clicks

    setActive(route);

    setTimeout(() => {
      navigate(route);
    }, 500);
  };

  return (
    <div className="h-screen bg-black text-cyan-300 flex overflow-hidden">
      {/* SIDEBAR SPACE */}
      <div className="w-64 hidden md:block"></div>

      {/* MAIN */}
      <div className="flex-1 flex items-center justify-center">
        {/* WRAPPER */}
        <div className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center">
          {/* LINES */}
          <HUDLines />

          {/* GRID */}
          <div className="grid grid-cols-3 w-full items-center">
            {/* LEFT */}
            <div className="flex flex-col items-end space-y-8 pr-12">
              <HUDPanel
                title="Projects"
                desc="Frontend builds"
                onClick={() => handleClick("/projects")}
              />
              <HUDPanel
                title="Skills"
                desc="Tech stack"
                onClick={() => handleClick("/skills")}
              />
            </div>

            {/* CENTER */}
            <div className="flex justify-center">
              <motion.div
                animate={{
                  scale: active ? 1.15 : 1,
                  opacity: active ? 0.7 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <HUDCore />
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-start space-y-8 pl-12">
              <HUDPanel
                title="Experience"
                desc="Work & learning"
                onClick={() => handleClick("/experience")}
              />
              <HUDPanel
                title="Contact"
                desc="Reach out"
                onClick={() => handleClick("/contact")}
              />
            </div>
          </div>

          {/* SAFE EXPANSION EFFECT */}
          {active && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 6, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-[200px] h-[200px] bg-cyan-400/10 rounded-full blur-2xl"
            />
          )}
        </div>
      </div>
    </div>
  );
}
