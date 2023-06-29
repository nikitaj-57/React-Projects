import React, { useState } from "react";
import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

const TipCalculator = () => {
  const [input, setInput] = useState("");
  const [myTip, setMyTip] = useState("0");
  const [friendsTip, setFriendsTip] = useState("0");
  const totalTip = ((Number(myTip) + Number(friendsTip)) / 200) * Number(input);
  const totalBill = Math.round(Number(input) + totalTip);
  function resetAll() {
    setInput("");
    setMyTip("0");
    setFriendsTip("0");
  }
  return (
    <div>
      <h1>Tip Calculator</h1>

      <BillInput input={input} setInput={setInput} />

      <SelectPercentage
        text="How did you like the service?"
        setMyTip={setMyTip}
      />
      <SelectPercentage
        text="How did your friend like the service?"
        setMyTip={setMyTip}
      />

      {input > 0 && (
        <>
          <Output input={input} totalBill={totalBill} totalTip={totalTip} />
          <Reset resetAll={resetAll} />
        </>
      )}
    </div>
  );
};

export default TipCalculator;
