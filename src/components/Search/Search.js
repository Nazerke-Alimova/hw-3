import React from "react";
import "../Search/Search.css";

export default function Search({ query, setQuery, searchWeather }) {
// query: Это переменная, которая хранит текущее значение запроса
// setQuery:функция, которая используется для изменения значения переменной query.
// searchWeather: функция, которая выполняет поиск погоды на основе значения 
  const api = {
    key: "40d2e39e4e20b1c7e12f57287ccd896f",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const SearchCity = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&&appid=${api.key}`)
        // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
        .then((res) => res.json())
        .then((result) => {
          searchWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className="search-box">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={SearchCity}
      />
    </div>
  );
}
