import { useState } from "react";
import fifa_25 from '../data/fifa_25.js';
import mafia_iii from '../data/mafia_iii.js';
import days_gone from '../data/days_gone.js';
import uncharted_4 from '../data/uncharted_4.js';
import rocket_league from '../data/rocket_league.js';
import cyberpunk_2077 from '../data/cyberpunk_2077.js';
import mortal_kombat_1 from '../data/mortal_kombat_1.js';
import battlefield_2042 from '../data/battlefield_2042.js';
import watch_dogs_legion from '../data/watch_dogs_legion.js';
import the_evil_within_2 from '../data/the_evil_within_2.js';
import need_for_speed_heat from '../data/need_for_speed_heat.js';
import red_dead_redemption_2 from '../data/red_dead_redemption_2.js';
import resident_evil_7_biohazard from '../data/resident_evil_7_biohazard.js';
import crash_team_racing_nitro_fueled from '../data/crash_team_racing_nitro_fueled.js';

export default function Games({ title, setTitle }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="flex items-center w-full h-[450px] fixed bottom-0 left-0 z-0 mb-1">
      <h1 className="font-thin text-4xl absolute top-7 left-[434px]">{title}</h1>
      <div className="cursor-pointer w-[10.46%] flex-shrink-0 rounded-sm z-20 opacity-60"
        onClick={() => { setIsClicked(!isClicked); }}
      >
        <img src="../games/2.jpg" />
      </div>
      <ul className={`flex gap-5 items-center p-5 w-full h-[300px] overflow-x-auto scroll-smooth ps-scroll transition-all duration-1000 relative right-0 ${isClicked ? "right-full z-0" : ""}`}>
        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Cyberpunk 2077");
            document.body.style.backgroundImage = cyberpunk_2077();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/cyberpunk_2077.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Days Gone");
            document.body.style.backgroundImage = days_gone();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/days_gone.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Mafia III");
            document.body.style.backgroundImage = mafia_iii();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/mafia_iii.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Mortal Kombat 1");
            document.body.style.backgroundImage = mortal_kombat_1();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/mortal_kombat_1.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("NFS Heat");
            document.body.style.backgroundImage = need_for_speed_heat();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/need_for_speed_heat.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Red Dead Redemption II");
            document.body.style.backgroundImage = red_dead_redemption_2();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/red_dead_redemption_2.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Resident Evil 7 Biohazard");
            document.body.style.backgroundImage = resident_evil_7_biohazard();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/resident_evil_7_biohazard.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Rocket League");
            document.body.style.backgroundImage = rocket_league();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/rocket_league.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("The Evil Within II");
            document.body.style.backgroundImage = the_evil_within_2();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/the_evil_within_2.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Uncharted 4");
            document.body.style.backgroundImage = uncharted_4();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/uncharted_4.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Watch Dogs Legion");
            document.body.style.backgroundImage = watch_dogs_legion();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/watch_dogs_legion.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Battlefield 2042");
            document.body.style.backgroundImage = battlefield_2042();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/battlefield_2042.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("CTR Nitro Fueled");
            document.body.style.backgroundImage = crash_team_racing_nitro_fueled();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/crash_team_racing_nitro_fueled.png" /></li>

        <li className="cursor-pointer w-[13%] transition-all duration-200 flex-shrink-0"
          onMouseEnter={() => {
            setTitle("Fifa 25");
            document.body.style.backgroundImage = fifa_25();
          }}
          onMouseLeave={() => {
            setTitle("");
            document.body.style.backgroundImage = "url('PS5_bg2.jpg')";
          }}>
          <img className="transition-all duration-200 rounded-sm hover:scale-110 shadow-[2px_2px_1px_rgba(0,0,0,0.7)]"
            src="../games/fifa_25.png" /></li>
      </ul>
      <div className="flex justify-center items-center cursor-pointer w-[6.07%] mr-2 relative flex-shrink-0 rounded-sm z-20 opacity-60"
        onClick={() => {
          window.open("spotify://", "_blank");
        }}
      >
        <svg
          className="w-full p-4 absolute"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Spotify</title>
          <path fill="#595959" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
        <img src="../games/1.jpg" />
      </div>
    </section>
  );
}
// <section className="flex flex-col justify-start items-start relative">
//     <h1 className="font-thin text-4xl absolute top-[-20px] left-[40px]">{title}</h1>
//     <ul className="flex justify-start items-start w-full pt-10 pb-10 overflow-x-auto scroll-smooth ps-scroll">
//         <li
//             onMouseEnter={() => setTitle("Battlefield 2042")}
//             onMouseLeave={() => setTitle("")}
//             className="w-[250px] transition-all duration-200 flex-shrink-0 hover:w-[300px] hover:border-2 hover:border-white">
//             <img src="../games/battlefield_2042.png" /></li>
//         <li
//             onMouseEnter={() => setTitle("CTR Nitro Fueled")}
//             onMouseLeave={() => setTitle("")}
//             className="w-[250px] transition-all duration-200 flex-shrink-0 hover:w-[300px] hover:border-2 hover:border-white">
//             <img src="../games/crash_team_racing_nitro_fueled.png" /></li>
//         <li
//             onMouseEnter={() => setTitle("Cyberpunk 2077")}
//             onMouseLeave={() => setTitle("")}
//             className="w-[250px] transition-all duration-200 flex-shrink-0 hover:w-[300px] hover:border-2 hover:border-white">
//             <img src="../games/cyberpunk2077.png" /></li>
//         <li
//             onMouseEnter={() => setTitle("Days Gone")}
//             onMouseLeave={() => setTitle("")}
//             className="w-[250px] transition-all duration-200 flex-shrink-0 hover:w-[300px] hover:border-2 hover:border-white">
//             <img src="../games/days_gone.png" /></li>
//     </ul>
// </section>