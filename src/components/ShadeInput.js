import React from "react";

const ShadeInput = ({ color, onInputChange }) => {
  return (
    <div className="shade-search">
      <div className="emojis">🦁🌋🌈🐻 </div>
      <h3>Click On The </h3>
      <input
        type="text"
        onChange={(e) => onInputChange(e.target.value)}
        value={color}
        className="shade-input"
      />
      <h3> To Copy The Code.</h3>
      <div className="emojis">🌱🌲🌷🌼</div>
    </div>
  );
};

export default ShadeInput;