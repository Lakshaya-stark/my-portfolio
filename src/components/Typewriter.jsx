import { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 30 }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <p className="whitespace-pre-line">
      {displayed}
      <span className="animate-pulse">█</span>
    </p>
  );
}
