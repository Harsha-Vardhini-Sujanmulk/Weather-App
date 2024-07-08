import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
	const [weatherInfo, setWeatherInfo] = useState({
		city: "Vijayawada",
		feelsLike: 29.33,
		humidity: 57,
		temp: 28.15,
		tempMax: 29.94,
		tempMin: 28.15,
		weather: "broken clouds",
	});

  let updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
	return (
		<div>
			<h2>Weather App</h2>
      <SearchBox updateWeatherInfo={ updateWeatherInfo} />
			<InfoBox info={weatherInfo} />
		</div>
	);
}
