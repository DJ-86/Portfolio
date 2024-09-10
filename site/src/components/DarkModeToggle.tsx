"use client"; // Mark this as a Client Component since it uses `useState`

import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function DarkModeToggle({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <BsFillMoonStarsFill
        onClick={() => setDarkMode(!darkMode)}
        className="cursor-pointer text-2xl"
      />
      {darkMode ? "Light Mode" : "Dark Mode"}

      {children}
    </div>
  );
}
