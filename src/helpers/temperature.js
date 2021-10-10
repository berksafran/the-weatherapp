import { getDayAndMonth } from "./date";

export const convertCelsiusToFahreneit = (c) => (c * 1.8 + 32).toFixed(2);

export const calculateAverageTemp = (tempArr) =>
  tempArr.reduce((prev, curr, index) => {
    if (index === tempArr.length - 1) {
      return (prev + curr) / tempArr.length;
    }
    return prev + curr;
  }, 0);

export const generateDailyForecastObject = (dataArray) => {
  let newObj = {};

  for (let i = 0; i < dataArray.length; i++) {
    const item = dataArray[i];
    const { day, month, year, text, altText } = getDayAndMonth(item.dt);
    if (!newObj[text]) {
      newObj[text] = { day, month, year, altText, temp: [item.main.temp] };
    } else {
      newObj[text] = {
        ...newObj[text],
        temp: [...newObj[text].temp, item.main.temp],
      };
    }
  }

  for (const key in newObj) {
    newObj[key] = {
      ...newObj[key],
      aveTemp: calculateAverageTemp(newObj[key].temp),
    };
  }

  return newObj;
};

export const generateHourlyForecast = (data, selectedDate) => {
  const { day, month, year } = selectedDate;
  const selectedDateText = `${year}-${
    month.length === 1 ? "0" + month : month
  }-${day.length === 1 ? "0" + day : day}`;

  return data
    .filter((item) => item.dt_txt.startsWith(selectedDateText))
    .map((item) => ({
      date: {
        ...selectedDate,
        text: selectedDateText,
      },
      tempC: item.main.temp,
      tempF: Number(convertCelsiusToFahreneit(item.main.temp)),
      hour: item.dt_txt.split(" ")[1],
    }));
};
