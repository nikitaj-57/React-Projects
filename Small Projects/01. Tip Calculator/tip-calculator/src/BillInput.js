import React from "react";

const BillInput = ({ input, setInput }) => {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      ></input>
    </div>
  );
};

export default BillInput;
