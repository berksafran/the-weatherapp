import axios from "axios";

const API_ID = "75f972b80e26f14fe6c920aa6a85ad57";
const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=${API_ID}&cnt=40&units=metric`;

export const API = {
  fetchData: () => {
    return axios.get(API_URL);
  },
};
