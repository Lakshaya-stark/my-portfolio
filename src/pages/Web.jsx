import { useState } from "react";
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
      {/* sidebar */}
      <div className="w-64 hidden md:block"></div>

      {/* main */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full max-w-[1200px] h-[500px] flex items-center justify-center">
          {/* lines */}
          <HUDLines />

          <div className="grid grid-cols-3 w-full items-center">
            {/* LEFT */}
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

            {/* CENTER */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <HUDCore active={active} />
              <HUDContent active={active} />
            </div>

            {/* RIGHT */}
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
