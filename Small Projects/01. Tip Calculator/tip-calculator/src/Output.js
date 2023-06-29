import React from "react";

const Output = ({ input, totalBill, totalTip }) => {
  return (
    <div>
      <h3>
        You pay ${totalBill}(${input} + ${totalTip})
      </h3>
    </div>
  );
};

export default Output;
