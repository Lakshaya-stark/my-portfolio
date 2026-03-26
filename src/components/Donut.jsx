import { useEffect, useRef } from "react";

export default function Donut() {
  const ref = useRef(null);

  useEffect(() => {
    let A = 0;
    let B = 0;

    const interval = setInterval(() => {
      const b = [];
      const z = [];

      const width = 60;
      const height = 30;

      for (let i = 0; i < width * height; i++) {
        b[i] = " ";
        z[i] = 0;
      }

      for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
          const c = Math.sin(i);
          const d = Math.cos(j);
          const e = Math.sin(A);
          const f = Math.sin(j);
          const g = Math.cos(A);
          const h = d + 2;
          const D = 1 / (c * h * e + f * g + 5);
          const l = Math.cos(i);
          const m = Math.cos(B);
          const n = Math.sin(B);
          const t = c * h * g - f * e;

          const x = Math.floor(width / 2 + 30 * D * (l * h * m - t * n));
          const y = Math.floor(height / 2 + 15 * D * (l * h * n + t * m));
          const o = x + width * y;

          const N = Math.floor(
            8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n),
          );

          if (y >= 0 && y < height && x >= 0 && x < width && D > z[o]) {
            z[o] = D;
            b[o] = ".,-~:;=!*#$@"[N > 0 ? N : 0];
          }
        }
      }

      A += 0.04;
      B += 0.02;

      if (ref.current) {
        let output = "";
        for (let k = 0; k < b.length; k++) {
          output += k % width === 0 ? "\n" : b[k];
        }
        ref.current.textContent = output;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre
      ref={ref}
      className="text-green-400 text-[10px] md:text-xs font-mono leading-none"
    />
  );
}
