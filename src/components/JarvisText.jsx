import { useEffect, useState } from "react";

export default function JarvisText({ text, speed = 20 }) {
  const [display, setDisplay] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= text.length) return;

    const t = setTimeout(() => {
      setDisplay((prev) => prev + text[i]);
      setI((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(t);
  }, [i, text, speed]);

  return (
    <p className="text-cyan-300 text-sm font-mono">
      {display}
      <span className="animate-pulse">▍</span>
    </p>
  );
}
