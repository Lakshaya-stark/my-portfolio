import { useState } from "react";
import SystemBoot from "../components/SystemBoot";
import Typewriter from "../components/Typewriter";
import SystemCoreAscii from "../components/SystemCoreAscii";
import ArduinoAscii from "../components/ArduinoAscii";
import RaspberryAscii from "../components/RaspberryAscii";
import HoverProjects from "../components/HoverProjects";

export default function Systems() {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <SystemBoot onFinish={() => setBooted(true)} />;
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar space */}
      <div className="w-64 hidden "></div>

      {/* CRT */}
      <div className="flex-1 border-[12px] border-t-[50px] border-[#e6af07] rounded-[40px] drop-shadow-[0_0_50px_#e6af07] relative overflow-hidden">
        {/* CRT effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.95)_100%)]" />
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:100%_2px]" />
        <div className="absolute inset-0 bg-yellow-400/5 blur-[2px]" />
        <div className="absolute inset-0 animate-[flicker_0.12s_infinite]" />

        {/* CONTENT */}
        <div className="relative z-10 p-8 font-mono text-[#e6af07] drop-shadow-[0_0_6px_#e6af07]">
          {/* TOP SECTION */}
          <div className="flex justify-center gap-100">
            {/* LEFT */}
            <div className="max-w-xl">
              <h1 className="text-3xl mt-20 tracking-wider">
                &gt; LOW LEVEL PAGE
              </h1>

              <Typewriter
                text={`Working with embedded systems and low-level programming.\nBuilding efficient hardware-software integrations.\nExploring microcontrollers, memory, and system internals.`}
              />
            </div>

            {/* RIGHT ASCII */}
            <div>
              <SystemCoreAscii />
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-30 flex justify-center gap-100">
            {/* ARDUINO */}
            <div className="relative group cursor-pointer">
              <ArduinoAscii />

              <HoverProjects
                title="Arduino Projects"
                projects={[
                  "Smart Helmet System",
                  "Temperature Monitor",
                  "IoT Light Control",
                ]}
              />
            </div>

            {/* RASPBERRY */}
            <div className="relative group cursor-pointer">
              <RaspberryAscii />

              <HoverProjects
                title="Raspberry Pi Projects"
                projects={[
                  "Home Server",
                  "Security Camera",
                  "Edge AI Detection",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
