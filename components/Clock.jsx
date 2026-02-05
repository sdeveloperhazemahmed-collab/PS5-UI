import { useEffect } from "react";
import Audio from "../components/Audio";

export default function Clock({ time, setTime, volume, setVolume, darkMode, setDarkMode, setBg, PSDark, PSLight }) {
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
    <section className="text-[#1a1a1a] shadow-[0_4px_30px_rgba(0,0,0,0.7)] border-[#1a1a1a] dark:text-white dark:border-white flex items-center justify-center gap-36 w-[1100px] p-1 font-thin text-2xl drop-shadow-[0_0_1px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_0_1px_rgba(0,0,0,0.7)] h-[50px] backdrop-blur-[20px] rounded-b-3xl border border-t-transparent dark:border-t-transparent">
      <div>{time}</div>
      <div className="flex justify-center items-center gap-5 text-[18px]">
        <span className="location"></span>
        <span className="date"></span>
        <span className="degree"></span>
        <span className="wind"></span>
        <span className="humidity"></span>
        <span className="pressure"></span>
      </div>
      <div className="flex justify-center items-center gap-14 text-[18px]">
        <Audio volume={volume} setVolume={setVolume} />
        <button
          onClick={() => {
            setBg(darkMode ? PSLight : PSDark);
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#a)" stroke="#007bff" stroke-width="1.5" stroke-miterlimit="10"> <path d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05" stroke-linecap="round"></path> <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#007bff" fill-opacity=".16"></path> <path d="M12 19v4M12 1v4" stroke-linecap="round"></path> </g> <defs> <clipPath id="a"> <path fill="#595959" d="M0 0h24v24H0z"></path> </clipPath> </defs> </g></svg>
          ) : (
            <svg className="w-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M785.334 194.943c174.789 174.787 174.789 459.179 0 633.967-174.787 174.787-459.178 174.787-633.967 0-13.206-13.205-26.22-28.336-39.807-46.314a19.672 19.672 0 0 1-2.223-20.012 19.777 19.777 0 0 1 16.54-11.442c98.838-6.698 191.601-48.753 261.234-118.386C530.853 489.014 546.472 258.475 423.392 96.51a19.553 19.553 0 0 1-2.249-19.981 19.554 19.554 0 0 1 16.54-11.497c129.587-8.759 256.325 38.583 347.651 129.911z" fill="#007bff"></path>
                <path d="M785.334 194.943c-14.266-14.268-29.484-27.325-45.354-39.399 151.302 175.925 143.723 442.269-22.987 608.98-121.85 121.85-307.044 190.195-461.161 142.154 60.038 35.511 140.886 47.603 167.101 50.984 129.417 13.067 263.464-29.816 362.401-128.753 174.789-174.787 174.789-459.179 0-633.966z" fill="#595959"></path>
              </g>
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}