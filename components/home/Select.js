import { arrayCoinsCountry } from "../../utilities/dataCoins";

const Select = ({ handleChange, value }) => {
  return (
    <select
      className="bg-zinc-100 form-select form-select-lg mb-3
    appearance-none
    block
    px-4
    py-2
    w-full
    text-xl
    font-normal
    text-gray-700
    bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-center"
      onChange={handleChange}
      defaultValue={value}
    >
      {arrayCoinsCountry.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
