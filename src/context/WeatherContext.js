import React, { createContext, useContext, useEffect, useState } from "react";
import cities from "../Citydata/cities.json";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    let selectCities = cities.filter((item) => item.name === city)[0];
    let key = "20ff055bba4e4fed8d4122421232702";
    axios(
      `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${selectCities.latitude},${selectCities.longitude}&days=8&hour=24`
    )
      .then((res) => res.data)
      .then((res) => res.forecast)
      .then((res) => setWeatherData(res.forecastday));
  }, [city]);

  const values = {
    cities,
    city,
    setCity,
    weatherData,
  };
  if (weatherData.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
