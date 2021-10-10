import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CustomBarChart() {
  const { hourlyForecastData, degree } = useSelector(
    (state) => state.weather,
    (prev, curr) => {
      if (
        prev.hourlyForecastData !== curr.hourlyForecastData ||
        prev.degree !== curr.degree
      )
        return false;
      return true;
    }
  );

  return (
    <div className="w-full bg-gray-200 p-10 pt-0">
      <h1 className="md:text-4xl text-2xl  text-gray-600 py-5 pb-20 text-center font-bold">
        {hourlyForecastData[0]?.date.altText}
      </h1>
      <ResponsiveContainer width="99%" height={300}>
        <BarChart data={hourlyForecastData}>
          <XAxis dataKey="hour" />
          <YAxis width={20} />
          <Tooltip />
          {degree === "celsius" ? (
            <Bar name="Celsius" dataKey="tempC" fill="#8884d8" />
          ) : (
            <Bar name="Fahrenheit" dataKey="tempF" fill="#3B82F6" />
          )}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
