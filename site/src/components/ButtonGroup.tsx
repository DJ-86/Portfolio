// ButtonGroup.js
import React from "react";
import Button from "./Button";

const ButtonGroup = () => {
  return (
    <div className="flex flex-col my-5">
      <Button label="About" href="/section1" />
      <Button label="Projects" href="/section2" />
      <Button label="Blog" href="/section3" />
    </div>
  );
};

export default ButtonGroup;
