import React, { useState } from "react";

const TipCalculator = () => {
  const [input, setInput] = useState("");
  const [myTip, setMyTip] = useState("0");
  const [friendsTip, setFriendsTip] = useState("0");
  const totalTip = ((Number(myTip) + Number(friendsTip)) / 200) * Number(input);
  const totalBill = Math.round(Number(input) + totalTip);
  function resetAll() {
    setInput("");
    setMyTip("Dissatisfied");
    setFriendsTip("Dissatisfied");
  }
  return (
    <div>
      <h1>Tip Calculator</h1>
      <form>
        <div>
          <p>How much was the bill?</p>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(Number(e.target.value))}
          ></input>
        </div>
        <p>How did you like the service?</p>
        <select onChange={(e) => setMyTip(e.target.value)}>
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing!(20%)</option>
        </select>
        <p>How did your friend like the service?</p>
        <select onChange={(e) => setFriendsTip(e.target.value)}>
          <option value="0">Dissatisfied(0%)</option>
          <option value="5">It was okay(5%)</option>
          <option value="10">It was good(10%)</option>
          <option value="20">Absolutely amazing!(20%)</option>
        </select>

        {input && (
          <h3>
            You pay ${totalBill}(${input} + ${totalTip})
          </h3>
        )}
        <button onClick={resetAll}>reset</button>
      </form>
    </div>
  );
};

export default TipCalculator;
