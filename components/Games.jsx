import { useEffect, useState, useMemo } from "react";

import fifa_25 from "../data/fifa_25.js";
import mafia_iii from "../data/mafia_iii.js";
import days_gone from "../data/days_gone.js";
import uncharted_4 from "../data/uncharted_4.js";
import rocket_league from "../data/rocket_league.js";
import cyberpunk_2077 from "../data/cyberpunk_2077.js";
import mortal_kombat_1 from "../data/mortal_kombat_1.js";
import battlefield_2042 from "../data/battlefield_2042.js";
import watch_dogs_legion from "../data/watch_dogs_legion.js";
import the_evil_within_2 from "../data/the_evil_within_2.js";
import need_for_speed_heat from "../data/need_for_speed_heat.js";
import red_dead_redemption_2 from "../data/red_dead_redemption_2.js";
import resident_evil_7_biohazard from "../data/resident_evil_7_biohazard.js";
import crash_team_racing_nitro_fueled from "../data/crash_team_racing_nitro_fueled.js";

import fifa_25_Cover from "../games/fifa_25.png";
import mafia_iii_Cover from "../games/mafia_iii.png";
import days_gone_Cover from "../games/days_gone.png";
import uncharted_4_Cover from "../games/uncharted_4.png";
import rocket_league_Cover from "../games/rocket_league.png";
import cyberpunk_2077_Cover from "../games/cyberpunk_2077.png";
import mortal_kombat_1_Cover from "../games/mortal_kombat_1.png";
import battlefield_2042_Cover from "../games/battlefield_2042.png";
import watch_dogs_legion_Cover from "../games/watch_dogs_legion.png";
import the_evil_within_2_Cover from "../games/the_evil_within_2.png";
import need_for_speed_heat_Cover from "../games/need_for_speed_heat.png";
import red_dead_redemption_2_Cover from "../games/red_dead_redemption_2.png";
import resident_evil_7_biohazard_Cover from "../games/resident_evil_7_biohazard.png";
import crash_team_racing_nitro_fueled_Cover from "../games/crash_team_racing_nitro_fueled.png";


export default function Games({ title, setTitle, darkMode, bg, setBg, PSDark, PSLight }) {
  const [isClicked, setIsClicked] = useState(false);

  const games = useMemo(() => [
    { id: 1, name: "Cyberpunk 2077", bg: cyberpunk_2077, img: cyberpunk_2077_Cover },
    { id: 2, name: "Days Gone", bg: days_gone, img: days_gone_Cover },
    { id: 3, name: "Mafia III", bg: mafia_iii, img: mafia_iii_Cover },
    { id: 4, name: "Mortal Kombat 1", bg: mortal_kombat_1, img: mortal_kombat_1_Cover },
    { id: 5, name: "NFS Heat", bg: need_for_speed_heat, img: need_for_speed_heat_Cover },
    { id: 6, name: "Red Dead Redemption II", bg: red_dead_redemption_2, img: red_dead_redemption_2_Cover },
    { id: 7, name: "Resident Evil 7 Biohazard", bg: resident_evil_7_biohazard, img: resident_evil_7_biohazard_Cover },
    { id: 8, name: "Rocket League", bg: rocket_league, img: rocket_league_Cover },
    { id: 9, name: "The Evil Within II", bg: the_evil_within_2, img: the_evil_within_2_Cover },
    { id: 10, name: "Uncharted 4", bg: uncharted_4, img: uncharted_4_Cover },
    { id: 11, name: "Watch Dogs Legion", bg: watch_dogs_legion, img: watch_dogs_legion_Cover },
    { id: 12, name: "Battlefield 2042", bg: battlefield_2042, img: battlefield_2042_Cover },
    { id: 13, name: "CTR Nitro Fueled", bg: crash_team_racing_nitro_fueled, img: crash_team_racing_nitro_fueled_Cover },
    { id: 14, name: "Fifa 2025", bg: fifa_25, img: fifa_25_Cover },
  ], []);

  useEffect(() => {
    const images = [
      PSDark(),
      PSLight(),
      ...games.map(g => g.bg())
    ];

    images.forEach(bg => {
      const img = new Image();
      img.src = bg.match(/url\(["']?(.*?)["']?\)/)[1];
    });
  }, [PSDark, PSLight, games]);

  useEffect(() => {
    document.body.style.backgroundImage = bg;
  }, [bg]);



  return (
    <section className="flex items-center w-full h-[450px] fixed bottom-0 left-0 z-0 mb-1">
      <h1 className="font-thin text-4xl absolute top-7 left-[434px]">{title}</h1>

      <div className="flex justify-center items-center w-[10.46%] flex-shrink-0 rounded-sm z-20 opacity-60 relative">
        <img src="../games/2.jpg" />
        {isClicked ? (
          <svg onClick={() => { setIsClicked(!isClicked); }} className="cursor-pointer absolute w-7 right-[-3px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 5L11 7.33333M9 19L15 12L13.5 10.25" stroke="#595959" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        ) : (
          <svg onClick={() => { setIsClicked(!isClicked); }} className="cursor-pointer absolute w-7 right-[-3px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19L9 12L10.5 10.25M15 5L13 7.33333" stroke="#595959" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        )}
      </div>

      <ul className={`flex gap-5 items-center p-5 w-full h-[300px] overflow-x-auto scroll-smooth ps-scroll transition-all duration-1000 relative right-0 ${isClicked ? "right-full z-0" : ""}`}>
        {games.map((game) => (
          <li key={game.id}
            className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
            onMouseEnter={() => {
              setTitle(game.name);
              setBg(game.bg());
            }}
            onMouseLeave={() => {
              setTitle("");
              if (darkMode) setBg(PSDark());
              else setBg(PSLight());
            }}
          >
            <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
              src={game.img} /></li>
        ))}
      </ul>

      <div className="flex justify-center items-center cursor-pointer w-[6.07%] relative flex-shrink-0 rounded-sm z-20 opacity-60"
        onClick={() => {
          window.open("spotify://", "_blank");
        }}
      >
        <span className="flex flex-col justify-center items-center absolute">
          <svg
            className="w-full p-4 pb-0"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Spotify</title>
            <path fill="#595959" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <h1 className="font-thin text-2xl text-[#595959]">Spotify</h1>
        </span>

        <img src="../games/1.jpg" />
      </div>
    </section>
  );
}
