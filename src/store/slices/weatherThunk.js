import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../services/api";

// Thunk Actions
export const fetchWeatherData = createAsyncThunk(
  "weather/fetchWeatherData",
  async () => {
    const response = await API.fetchData();
    return response.data;
  }
);
