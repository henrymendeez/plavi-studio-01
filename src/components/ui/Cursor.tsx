"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (curRef.current) {
        curRef.current.style.left = e.clientX + "px";
        curRef.current.style.top = e.clientY + "px";
      }
    };

    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.11;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    const raf = requestAnimationFrame(tick);

    const addBig = () => {
      curRef.current?.classList.add("big");
      ringRef.current?.classList.add("big");
    };
    const removeBig = () => {
      curRef.current?.classList.remove("big");
      ringRef.current?.classList.remove("big");
    };

    const targets = document.querySelectorAll(
      "a, button, [data-cursor-hover]"
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", addBig);
      el.addEventListener("mouseleave", removeBig);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={curRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
