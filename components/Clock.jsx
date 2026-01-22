import { useEffect } from "react";
import Audio from "../components/Audio";

export default function Clock({ time, setTime, volume, setVolume }) {
  useEffect(() => {
    const countryName = document.querySelector(".location");
    const date = document.querySelector(".date");
    const degree = document.querySelector(".degree");
    const wind = document.querySelector(".wind");
    const humidity = document.querySelector(".humidity");
    const pressure = document.querySelector(".pressure");
    const getContinent = () => { return "Africa"; }
    const getLocation = () => { return "Cairo"; }
    const getDate = () => {
      const date = new Date();
      const currentDate = date.toLocaleDateString();
      return currentDate;
    }

    async function fetchdata() {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getLocation()},EG&APPID=f4131a587dfb030fbb05ece7edef3611&units=metric`);
      const data = await res.json();

      countryName.textContent = `${getLocation()} EG`;
      wind.textContent = data.wind.speed + "m/s";
      degree.textContent = data.main.temp + "°C";
      humidity.textContent = data.main.humidity + "%";
      pressure.textContent = data.main.pressure + "hPa";
      date.textContent = getDate();
    }
    fetchdata();

    async function getTime(setTime) {
      const res = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${getContinent()}/${getLocation()}`);
      const data = await res.json();
      const hours = String(data.hour).padStart(2, "0");
      const minutes = String(data.minute).padStart(2, "0");
      const seconds = String(data.seconds).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    }
    getTime(setTime);
    const interval = setInterval(() => getTime(setTime), 1000);
    return () => clearInterval(interval);
  }, [setTime]);

  return (
    <section className="flex items-center justify-center gap-36 w-[1000px] p-1 font-thin text-2xl drop-shadow-[0_0_1px_rgba(255,255,255,0.7)] h-[50px] backdrop-blur-[5px] rounded-b-3xl border border-t-transparent">
      <div>{time}</div>
      <div className="flex justify-center items-center gap-5 text-[18px]">
        <span className="location"></span>
        <span className="date"></span>
        <span className="degree"></span>
        <span className="wind"></span>
        <span className="humidity"></span>
        <span className="pressure"></span>
      </div>
      <Audio volume={volume} setVolume={setVolume}/>
    </section>
  );
}