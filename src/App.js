import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import LocationBox from "./components/LocationBox/LocationBox";
import WeatherBox from "./components/WeatherBox/WeatherBox";

function App() {
  const [query, setQuery] = useState("");
  // состояние для ввода 
  const [weather, setWeather] = useState({}); 
  // состояние для получния данные о погоде через API

  const searchWeather = (result) => {
    setWeather(result);
  };  
  // вызываю с компонента Search.js

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>
 {/* Если объект weather.main нету данные о погоде), используется класс 'App'.аналогично с температурой тоже самое */} 

      <main>
        <Search query={query} setQuery={setQuery} searchWeather={searchWeather} />
        {(typeof weather.main != "undefined") ? (
// здесь тоже самое если данные есть до они передаются через пропсы если нету то пустое поле

          <div>
            <LocationBox weather={weather}/>
            <WeatherBox weather={weather} />
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default App;
