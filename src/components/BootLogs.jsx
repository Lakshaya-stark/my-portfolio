import { useEffect, useState, useRef } from "react";

const logs = [
  "Initializing hardware...",
  "Checking memory modules...",
  "Memory OK",
  "Loading kernel modules...",
  "Mounting file systems...",
  "Starting device manager...",
  "Establishing device interfaces...",
  "Initializing network stack...",
  "Configuring I/O ports...",
  "Boot complete.",
  "",
  "Developer: Stark",
  "Domain: Embedded Systems / Low-Level Engineering",
  "",
  "Skills:",
  "- Arduino",
  "- Raspberry Pi",
  "- MicroPython",
  "- x86 Assembly",
  "",
  "Status: ONLINE",
];

export default function BootLogs() {
  const [visibleLogs, setVisibleLogs] = useState([]);
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (index >= logs.length) return;

    const timeout = setTimeout(() => {
      setVisibleLogs((prev) => [...prev, logs[index]]);
      setIndex((prev) => prev + 1);
    }, 200); // speed control

    return () => clearTimeout(timeout);
  }, [index]);

  // auto scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  return (
    <div ref={containerRef} className="h-full overflow-hidden">
      {visibleLogs.map((line, i) => (
        <p key={i} className="leading-relaxed">
          {line && `> ${line}`}
        </p>
      ))}

      {/* blinking cursor */}
      <span className="inline-block w-2 h-4 bg-[#e6af07] ml-2 animate-pulse"></span>
    </div>
  );
}
