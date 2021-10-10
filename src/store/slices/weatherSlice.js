import { createSlice } from "@reduxjs/toolkit";
import {
  generateDailyForecastObject,
  generateHourlyForecast,
} from "../../helpers/temperature";
import { fetchWeatherData } from "./weatherThunk";

const initialState = {
  loading: true,
  error: {
    visibility: false,
    message: "",
    subMessage: "",
  },
  data: {},
  dailyForecastData: {},
  hourlyForecastData: [],
  degree: "celsius",
  selectedDate: {
    day: null,
    month: null,
    year: null,
    text: "",
  },
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    openAlert: (state, action) => {
      state.error.visibility = true;
      state.error.message = action.payload;
    },
    closeAlert: (state) => {
      state.error.visibility = false;
    },
    setDegree: (state, action) => {
      state.degree = action.payload;
    },
    setSelectedDate: (state, action) => {
      const { day, month, year } = action.payload;
      state.selectedDate = { day, month, year };
      state.hourlyForecastData = generateHourlyForecast(
        state.data.list,
        action.payload
      );
    },
  },
  extraReducers: (builder) => {
    // Fetching data (pending)
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.loading = true;
    });

    // If response is fulfilled
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.data = action.payload;

      // Set daily forecast data for slider
      state.dailyForecastData = generateDailyForecastObject(
        action.payload.list
      );

      // Set hourly forecast data for bar chart. Default selected date is first day of slider
      state.hourlyForecastData = generateHourlyForecast(
        action.payload.list,
        Object.entries(state.dailyForecastData)[0][1]
      );

      state.loading = false;
    });

    // If response is rejected
    builder.addCase(fetchWeatherData.rejected, (state, action) => {
      state.error.visibility = true;
      state.error.message = "There is an error while fetching data";
      state.error.subMessage = action.error.message;
    });
  },
});

export const {
  hideLoading,
  openAlert,
  closeAlert,
  setDegree,
  setSelectedDate,
} = weatherSlice.actions;

export default weatherSlice.reducer;
