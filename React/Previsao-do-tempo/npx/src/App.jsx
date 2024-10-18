  //https://www.youtube.com/watch?v=1mm_C-t_Vyg&list=PLa1OsgP5efFgfFTzsaDXGdYyYAIz0FSZK
  import { useState, useRef } from 'react';
  import axios from 'axios';
  import './App.css';
  import WeatherInfo from "./componnents/WeatherInfo/WeatherInfo"
  function App() {
    const [weather, setWeather] = useState({});
    const inputRef = useRef();

    async function searchCity() {
      const city = inputRef.current.value;
      //Das diversas informações que ele daria se eu pedisse apenas pra mostrar inputRef, eu estou filtrando para mostrar apenas o valor (value)
      const key = "fe7f7699bd49b7d67b2da360b1f7c129";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

      const apiInfo = await axios.get(url);
      setWeather(apiInfo.data);
    }
    return (
      <>
        <div>
          <h1>Previsão de tempo</h1>
          <input ref={inputRef} type="text" placeholder='Ex: São Paulo'/>
          <button onClick={searchCity}>Buscar</button>

          <WeatherInfo weather={weather}/>
        </div>
      </>
    )
  }

  export default App;
