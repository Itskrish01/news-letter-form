import React from "react";

const Paragraph = ({ color, mobileSize, desktopSize, children, classes }) => {
  return (
    <p
      style={{ color }}
      className={` text-base sm:text-${mobileSize} md:text-${desktopSize} ${classes} font-normal`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
