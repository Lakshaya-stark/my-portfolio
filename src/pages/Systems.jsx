import { useState } from "react";
import SystemBoot from "../components/SystemBoot";

export default function Systems() {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <SystemBoot onFinish={() => setBooted(true)} />;
  }

  return (
    <div className="min-h-screen bg-black flex">
      {/* SIDEBAR SPACE (IMPORTANT) */}
      <div className="w-64 hidden "></div>

      {/* CRT FULL AREA */}
      <div className="flex-1 relative border-12 border-t-50 border-[#e6af07] rounded-4xl drop-shadow-[0_0_50px_#e5e607]">
        {/* OUTER GLOW FRAME */}
        <div className="absolute inset-0 ">
          {/* INNER CRT SCREEN */}
          <div className="relative h-full w-full overflow-hidden">
            {/* VIGNETTE */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.95)_100%)]" />

            {/* SCANLINES */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:100%_2px]" />

            {/* PHOSPHOR AMBER GLOW */}
            <div className="absolute inset-0 pointer-events-none bg-yellow-400/5 blur-[2px]" />

            {/* FLICKER */}
            <div className="absolute inset-0 pointer-events-none animate-[flicker_0.12s_infinite]" />

            {/* CURVATURE LIGHT */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-yellow-200/10 via-transparent to-black/40" />

            {/* CONTENT */}
            <div className="relative z-10 h-full p-10 font-mono text-[#e6af07] drop-shadow-[0_0_6px_#e6af07]">
              <div className="text-sm mb-6 tracking-wider">SYSTEM v1.0.0</div>

              <div className="space-y-3 text-sm leading-relaxed">
                <p>&gt; Initializing hardware...</p>
                <p>&gt; Loading kernel modules...</p>
                <p>&gt; Establishing device interfaces...</p>
                <p>&gt; Boot complete.</p>

                <br />

                <p>&gt; Developer: Stark</p>
                <p>&gt; Domain: Embedded Systems / Low-Level Engineering</p>

                <br />

                <p>&gt; Skills:</p>
                <p> - Arduino</p>
                <p> - Raspberry Pi</p>
                <p> - MicroPython</p>
                <p> - x86 Assembly</p>

                <br />

                <p>&gt; Status: ONLINE</p>

                {/* CURSOR */}
                <span className="inline-block w-2 h-4 bg-[#ffd86b] ml-2 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
