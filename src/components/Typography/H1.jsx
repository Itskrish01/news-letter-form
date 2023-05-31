import React from "react";

const H1 = ({ color, children }) => {
  return (
    <h1 style={{ color }} className={`text-5xl font-bold`}>
      {children}
    </h1>
  );
};

export default H1;
