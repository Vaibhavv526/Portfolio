"use client";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    let ringX = -100;
    let ringY = -100;
    let animFrame: number;

    const animateRing = () => {
      ringX += (pos.x - ringX) * 0.12;
      ringY += (pos.y - ringY) * 0.12;
      setRingPos({ x: ringX, y: ringY });
      animFrame = requestAnimationFrame(animateRing);
    };

    animFrame = requestAnimationFrame(animateRing);
    window.addEventListener("mousemove", moveCursor);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(animFrame);
    };
  }, [pos.x, pos.y]);

  return (
    <>
      <div
        className="cursor-dot"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor-ring ${hovered ? "hovered" : ""}`}
        style={{ left: ringPos.x, top: ringPos.y }}
      />
    </>
  );
}
