import React from "react";

const Input = ({
  label,
  handleChange,
  value,
  placeholder,
  emailError,
  type,
  isLoading,
  validateEmail,
}) => {
  return (
    <div className=" w-full ">
      <div className="flex justify-between">
        <label className="text-xs font-bold text-[#242742]" htmlFor="">
          {label}
        </label>
        {emailError !== "" && (
          <label className="text-xs font-bold text-[#ff6257]" htmlFor="">
            {emailError}
          </label>
        )}
      </div>
      <div className="flex items-center relative">
        <input
          type={type}
          className={`w-full mt-1 px-4 py-3 border ${
            emailError !== ""
              ? "border-[#ff6257] bg-red-100 ring-0 ring-red-500 text-[#ff6257]"
              : "border-[#9294a0] bg-transparent"
          }  rounded-lg focus:outline-none focus:ring-1 ring-black transition-all duration-150`}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          onBlur={validateEmail}
        />
        {emailError !== "" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500 absolute right-3 top-[16px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        )}
        {isLoading && (
          <div
            className="animate-spin absolute right-3.5 top-[21px] inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-[#9294a0] rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
