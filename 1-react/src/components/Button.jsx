import React from "react";

const Button = ({ styleType, block, ...rest }, ref) => {
  let className = "Button";
  if (styleType) className += ` ${styleType}`;
  if (block) className += " block";

  return <button {...rest} ref={ref} className={className} />;
};

export default React.forwardRef(Button);
