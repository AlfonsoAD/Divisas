//Componentes
import LayoutHome from "../components/LayoutHome";
import Select from "../components/home/Select";
import InputMoney from "../components/home/InputMoney";
import ButtonConvert from "../components/home/ButtonConvert";
//Herramientas
import { useEffect, useState } from "react";
import { Comfortaa } from "@next/font/google";
import Image from "next/image";
import flechaImg from "../public/flecha.png";
//Api
import { getLatest } from "./api/apiFrankfurter";
//Utilities
import { coinsCountry } from "../utilities/dataCoins";

const comfortaa = Comfortaa({ subsets: ["latin"] });

const Home = () => {
  const [valueCoinFrom, setValueCoinFrom] = useState("Australian Dollar");
  const [valueCoinTo, setValueCoinTo] = useState("Bulgarian Lev");
  const [countMoney, setCountMoney] = useState("1");
  const [response, setResponse] = useState("");

  useEffect(() => {
    getLatest(
      coinsCountry[valueCoinFrom],
      coinsCountry[valueCoinTo],
      countMoney
    ).then((resp) => setResponse(Object.entries(resp)));
  }, []);

  const valueNameCoinFrom = (e) => setValueCoinFrom(e.target.value);
  const valueNameCoinTo = (e) => setValueCoinTo(e.target.value);
  const valueCountMoney = (e) => setCountMoney(e.target.value);
  const convertCoin = (e) => {
    e.preventDefault();
    getLatest(
      coinsCountry[valueCoinFrom],
      coinsCountry[valueCoinTo],
      countMoney
    ).then((resp) => setResponse(Object.entries(resp)));
  };

  return (
    <LayoutHome>
      <div
        className={`flex flex-wrap justify-center items-center text-3xl font-bold ${comfortaa.className} mb-6 pt-24 w-54`}
      >
        <h1>Conversor de monedas</h1>
      </div>
      <div className="p-18 grid grid-cols-1">
        <div
          className={`flex flex-wrap justify-center items-center ${comfortaa.className}`}
        >
          <div className="m-2">
            <Select
              handleChange={valueNameCoinFrom}
              value="Australian Dollar"
            />
            <InputMoney value={countMoney} handleChange={valueCountMoney} />
          </div>
          <Image src={flechaImg} height="64" width="64" alt="Flecha" />
          <div className="m-2">
            <Select handleChange={valueNameCoinTo} value="Bulgarian Lev" />
            <ButtonConvert convert={convertCoin} />
          </div>
        </div>
      </div>
      <div
        className={`mt-20 flex flex-wrap justify-center items-center ${comfortaa.className} font-bold`}
      >
        <label className="mr-3 text-2xl">{`${countMoney} ${valueCoinFrom} es igual a`}</label>
        <label className="text-6xl ">
          {!Array.isArray(response) ? "0.00" : response[0][1]}
        </label>
        <label className="mt-6 text-2xl">{`${valueCoinTo} `}</label>
      </div>
    </LayoutHome>
  );
};

export default Home;
