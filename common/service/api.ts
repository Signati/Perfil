import axios, { AxiosInstance } from 'axios'

const api = 'https://cors-anywhere.herokuapp.com/https://dremusic.herokuapp.com/Api/';
export const http: AxiosInstance = axios.create({
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    // 'Authorization': `Bearer ${Cookies.get('token')}`
  },
  baseURL: api
});
