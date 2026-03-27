import { useState } from "react";
import SystemBoot from "../components/SystemBoot";
import BootLogs from "../components/BootLogs";

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
      <div className="flex-1 relative border-12 border-t-50 border-[#e6af07] rounded-4xl drop-shadow-[0_0_50px_#f4d173]">
        {/* OUTER GLOW FRAME */}
        <div className="absolute inset-0 ">
          {/* INNER CRT SCREEN */}
          <div className="relative h-full w-full overflow-hidden">
            {/* VIGNETTE */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.95)_100%)]" />

            {/* SCANLINES */}
            <div className="absolute inset-0 pointer-events-none opacity-30 bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:100%_2px]" />

            {/* PHOSPHOR AMBER GLOW */}
            <div className="absolute inset-0 pointer-events-none bg-yellow-400/5 blur-[1px]" />
            {/* CURVATURE LIGHT */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-yellow-400/10 via-transparent to-black/40" />

            {/* CONTENT */}
            <div className="relative z-10 h-full p-10 font-mono text-[#e6af07] drop-shadow-[0_0_2px_#e6af07] ">
              <div className="text-sm mb-6 tracking-wider">SYSTEM v1.0.0</div>

              <BootLogs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
