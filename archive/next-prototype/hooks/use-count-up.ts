"use client";

import { useEffect, useState } from "react";

export function useCountUp(end: number, duration = 1200, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame = 0;
    const totalFrames = Math.max(1, Math.round(duration / 16));

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(frame / totalFrames, 1);
      setCount(Math.round(end * progress));

      if (progress >= 1) {
        window.clearInterval(timer);
      }
    }, 16);

    return () => window.clearInterval(timer);
  }, [duration, end, start]);

  return count;
}
