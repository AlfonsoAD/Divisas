import { frankfurterApi } from "./config";

const getLatest = async (coinFrom, coinTo, valueCoin) => {
  const resp = await frankfurterApi.get(
    `latest?amount=${valueCoin}&from=${coinFrom}&to=${coinTo}`
  );
  const { data } = resp;
  return data.rates;
};

export { getLatest };
