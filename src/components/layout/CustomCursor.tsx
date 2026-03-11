import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const isTouch = () => (typeof window !== "undefined" ? ("ontouchstart" in window || navigator.maxTouchPoints > 0) : false);

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (isTouch()) {
      // Do not render on touch devices
      if (cursorRef.current) cursorRef.current.style.display = "none";
      return;
    }

    const cursor = cursorRef.current!;
    const inner = innerRef.current!;

    // Start off-screen
    gsap.set(cursor, { x: -100, y: -100 });
    gsap.set(inner, { x: 0, y: 0, scale: 1, rotation: 0 });

    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");

    const onMove = (e: MouseEvent) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    const onDown = () => {
      setIsClicking(true);
      gsap.to(inner, { scale: 0.85, rotation: -15, duration: 0.2, ease: "back.out(2)" });
    };
    const onUp = () => {
      setIsClicking(false);
      gsap.to(inner, { scale: isHovering ? 1.3 : 1, rotation: 0, duration: 0.3, ease: "back.out(2)" });
    };

    const onEnterLink = () => {
      setIsHovering(true);
      gsap.to(inner, { scale: 1.3, rotation: -10, duration: 0.3, ease: "back.out(1.5)" });
    };
    const onLeaveLink = () => {
      setIsHovering(false);
      gsap.to(inner, { scale: 1, rotation: 0, duration: 0.3, ease: "back.out(1.5)" });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    // Hover interactions for links and buttons
    const hoverables = Array.from(document.querySelectorAll<HTMLElement>("a, button, [data-cursor-hover]"));
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, [isHovering]);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
    >
      <div
        ref={innerRef}
        className="relative flex items-center justify-center"
        style={{
          filter: "drop-shadow(0 4px 12px rgba(201, 77, 77, 0.6))",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 14V7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7V14M12 14V6C12 4.89543 12.8954 4 14 4C15.1046 4 16 4.89543 16 6V14M16 14V7C16 5.89543 16.8954 5 18 5C19.1046 5 20 5.89543 20 7V14M20 14V9C20 7.89543 20.8954 7 22 7C23.1046 7 24 7.89543 24 9V18C24 23.5228 19.5228 28 14 28C8.47715 28 4 23.5228 4 18V14C4 12.8954 4.89543 12 6 12C7.10457 12 8 12.8954 8 14Z"
            fill={isClicking ? "#c94d4d" : isHovering ? "#d98585" : "#c9716d"}
            stroke={isHovering ? "#c94d4d" : "#77021D"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;
