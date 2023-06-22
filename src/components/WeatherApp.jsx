import React, { useEffect, useState } from "react";
import WeatherChart from "./WeatherChart";

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          setError(true);
          console.log("Error fetching weather data");
        }
      } catch (error) {
        setError(true);
        console.log("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, []);

  if (error) {
    return <div>Error fetching weather data. Please try again later.</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-80">
      <WeatherChart weatherData={weatherData} />
    </div>
  );
};

export default WeatherComponent;
