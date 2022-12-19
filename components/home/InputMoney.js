import React from "react";

const InputMoney = ({ value, handleChange }) => {
  return (
    <input
      type="text"
      className="bg-zinc-100 border mb-3 text-xl px-4
    py-2 w-full text-right"
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputMoney;
