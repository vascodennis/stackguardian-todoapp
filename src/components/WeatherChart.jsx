import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const WeatherChart = ({ weatherData }) => {
  const { hourly } = weatherData;
  const data = hourly.time.map((time, index) => ({
    time: new Date(time),
    temperature: hourly.temperature_2m[index],
  }));

  return (
    <LineChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="temperature"
        name="Temperature (°C)"
        stroke="#8884d8"
      />
    </LineChart>
  );
};

export default WeatherChart;
