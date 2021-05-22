import axios from "axios";

export default class WeatherService {
  _apiBase = "https://api.openweathermap.org/data/2.5/onecall";
  _imageBase = "https://openweathermap.org/img/wn/";
  _APIKEY = "7473b036addcd4314dde1213bf496842";

  getWeatherForecast = async (lat, lon) => {
    const excludeParts = ["minutely", "hourly", "daily", "alerts"];

    const url = `${this._apiBase}?lat=${lat}&lon=${lon}&units=metric&exclude=${excludeParts}&appid=${this._APIKEY}`;
    const res = await axios.get(url);

    return await this._extractData(res.data);
  };

  _extractData = (data) => {
    const {
      dt: date,
      weather: [icon],
      temp,
    } = data.current;

    const { icon: iconName } = icon;

    return {
      date,
      temp,
      image: `${this._imageBase}${iconName}.png`,
    };
  };
}
