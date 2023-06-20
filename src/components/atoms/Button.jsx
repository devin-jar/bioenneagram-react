import React from "react";

export const Button = ({ href, target, text, className }) => {
  return (
    <>
      <a
        target={target}
        href={href}
        // className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ${className}`}
      >
        {text}
      </a>
    </>
  );
};
