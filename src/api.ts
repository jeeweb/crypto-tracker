import axios from "axios";

const Base_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return await axios
    .get(`${Base_URL}/coins/`)
    .then((res) => res.data.slice(0, 100));
}

export async function fetchCoinInfo(coinId: string) {
  return await axios.get(`${Base_URL}/coins/${coinId}`).then((res) => res.data);
}

export async function fetchCoinTickers(coinId: string) {
  return await axios
    .get(`${Base_URL}/tickers/${coinId}`)
    .then((res) => res.data);
}
