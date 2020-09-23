import React from "react";

const Button = ({title}, ref) => {
  return <button type="submit" ref={ref}>{title}</button>;
};

export default React.forwardRef(Button);
