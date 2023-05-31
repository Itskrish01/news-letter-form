import React from "react";

const Button = ({ children, type, handleClick }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="relative mt-4 w-full  hover:shadow-[#ff5478] shadow-lg inline-flex items-center justify-center font-bold overflow-hidden group rounded-lg"
    >
      <span className="w-full h-full bg-gradient-to-br from-[#ff8a05]  to-[#ff5478] group-hover:from-[#ff5478] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative w-full px-6 py-3.5 transition-all ease-out bg-[#242742] rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">{children}</span>
      </span>
    </button>
  );
};

export default Button;
