import React from "react";

const ButtonConvert = ({ convert }) => {
  return (
    <button
      type="submit"
      className="bg-purple-800 hover:bg-purple-500 text-zinc-100 hover:text-purple-800 py-2 px-4 rounded w-34 h-8 ml-20 "
      onClick={convert}
    >
      Convertir
    </button>
  );
};

export default ButtonConvert;
