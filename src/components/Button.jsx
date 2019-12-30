import React from "react";

export default function Button({ children, timeoutMs = 3000, onClick }) {

  const handleClick = e => {
      onClick(e);
  };

  return (
    <>
      <button onClick={handleClick}>
        {children}
      </button>
    </>
  );
}
