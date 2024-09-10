"use client"; // components/FallingSquares.js
import { useEffect, useRef } from "react";

const FallingSquares = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const numSquares = 10; // Number of squares to create

      for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        const size = Math.random() * 90 + 10; // Random size between 10 and 100
        const leftPosition = Math.random() * 100; // Random position from 0% to 100%
        const animationDuration = Math.random() * 5 + 7; // Duration between 5s and 12s

        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.backgroundColor = `rgba(${Math.random() * 255}, ${
          Math.random() * 255
        }, ${Math.random() * 255}, 0.4)`;
        square.style.position = "absolute";
        square.style.left = `${leftPosition}%`;
        square.style.top = `-${size}px`; // Start above the container

        square.style.animation = `fall ${animationDuration}s linear infinite`;
        square.style.zIndex = "-1"; // Make sure squares are behind the main content

        container.appendChild(square);
      }

      // Clean up on component unmount
      return () => {
        container.innerHTML = "";
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-gray-800 z-[-1]"
    >
      {/* Squares will be appended here */}
    </div>
  );
};

export default FallingSquares;
