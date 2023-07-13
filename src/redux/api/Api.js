import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://wallet.goit.ua/api/',
});
export const token = {
  set(token) {
    Api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    Api.defaults.headers.common.Authorization = '';
  },
};

export const ApiCurrency = axios.create({
  baseURL: 'https://api.monobank.ua/bank/currency',
});
