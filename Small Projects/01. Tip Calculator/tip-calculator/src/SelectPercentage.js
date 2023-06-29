import React from "react";

const SelectPercentage = ({ text, setMyTip }) => {
  return (
    <div>
      <label>{text}</label>
      <select onChange={(e) => setMyTip(e.target.value)}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
