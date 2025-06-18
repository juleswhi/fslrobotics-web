import React from "react";

export const Link: React.FC<{ href: string, text: string }> = ({ href, text }) => {
  return(
    <>
      <a href={href} className="text-red-500 hover:underline">
        {text}
      </a>
    </>
  );
}
