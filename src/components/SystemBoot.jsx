import { useEffect, useState } from "react";

export default function SystemBoot({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 10;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(onFinish, 500);
      }
      setProgress(Math.floor(value));
    }, 120);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[#2b2b2b] flex flex-col justify-center items-center font-mono text-[#d6b48c] z-50">
      <div className="text-2xl mb-6">Booting...</div>

      <div className="w-[300px] border-2 border-[#d6b48c] p-1">
        <div className="h-4 bg-[#d6b48c]" style={{ width: `${progress}%` }} />
      </div>

      <div className="mt-4 text-sm">
        {progress < 100 ? "Nearly there..." : "System Ready"}
      </div>
    </div>
  );
}
