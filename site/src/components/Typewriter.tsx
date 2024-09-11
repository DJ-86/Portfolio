"use client";
import { useState, useEffect } from "react";

const Typewriter = () => {
  const [currentText, setCurrentText] = useState(""); // Combine text into a single state
  const [currentIndex, setCurrentIndex] = useState(0); // Track which string is being typed
  const [charIndex, setCharIndex] = useState(0); // Track which character of the current string is being typed

  useEffect(() => {
    const typeWriterStrings = [
      "Hi, my name is",
      "David Jones",
      "a front-end developer",
      "from the UK",
    ];
    const speed = 80;

    const typeNextChar = () => {
      if (currentIndex < typeWriterStrings.length) {
        if (charIndex < typeWriterStrings[currentIndex].length) {
          setCurrentText(
            (prev) => prev + typeWriterStrings[currentIndex].charAt(charIndex)
          );
          setCharIndex((prev) => prev + 1);
        } else {
          setCharIndex(0);
          setCurrentIndex((prev) => prev + 1); // Move to the next string
          setCurrentText((prev) => prev + " "); // Add a space after each string
        }
      }
    };

    if (currentIndex < typeWriterStrings.length) {
      const timeout = setTimeout(typeNextChar, speed); // Set typing speed
      return () => clearTimeout(timeout); // Clear timeout to prevent memory leaks
    }
  }, [charIndex, currentIndex]); // No need to include typeWriterStrings in the dependency array

  return (
    /*  <div className="relative inline-block">
      <h2 className="text-5xl text-teal-300 font-medium md:text-6xl leading-snug">
      {currentText}
    </h2>
    <div className="absolute top-0 right-0 bottom-0 w-1 bg-teal-300 animate-blink"></div>
  </div>
);*/
    <div className="min-h-[225px]">
      <h2 className="text-4xl text-teal-300 font-medium md:text-6xl">
        {currentText}
      </h2>
    </div>
  );
};

export default Typewriter;
