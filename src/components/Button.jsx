import React from "react";

export default function Button({ name, children }) {
  return (
    <button className="btn" {...name}>
      {children}
    </button>
  );
}
