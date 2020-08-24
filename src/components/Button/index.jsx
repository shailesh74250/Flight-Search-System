import React from 'react';

function Button({ type, label }) {
  return (
    <button type={type} className="btn">
      {label}
    </button>
  );
}

export default Button;
