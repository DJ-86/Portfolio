// Button.js (Component for a single button)
import Link from "next/link";
import React from "react";

const Button = ({ label, href }) => {
  return (
    <Link href={href}>
      <button className="my-3 text-3xl mx-auto bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-b hover:from-teal-500 hover:to-teal-750">
        {label}
      </button>
    </Link>
  );
};

export default Button;
