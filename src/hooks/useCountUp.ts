import { useEffect, useRef, useState } from 'react';

function parseStatValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  if (!match) return { prefix: '', number: 0, suffix: value };
  return { prefix: match[1], number: Number(match[2]), suffix: match[3] };
}

export function useCountUp(value: string, isActive: boolean, duration = 1800) {
  const parsed = parseStatValue(value);
  const [display, setDisplay] = useState(value);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive || parsed.number === 0) {
      setDisplay(value);
      return;
    }

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = Math.round(parsed.number * eased);
      setDisplay(`${parsed.prefix}${current}${parsed.suffix}`);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [isActive, value, parsed.number, parsed.prefix, parsed.suffix, duration]);

  return display;
}
