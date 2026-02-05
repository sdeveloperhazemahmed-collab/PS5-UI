import NavButtons from "./NavButtons";

export default function NavBar({ showPlayersBox, setShowPlayersBox, logIn, setLogIn, userImg, showNotificationBox, setShowNotificationBox, showUserInterestsBox, setShowUserInterestsBox, showPlay2Win, setShowPlay2Win, showStoreBox, setShowStoreBox, darkMode }) {
  return (
    <nav className="text-[#1a1a1a] border-[#1a1a1a] dark:text-white dark:border-white w-[1400px] h-[70px] pl-10 pr-10 flex justify-between items-center rounded-2xl border bg-black/20 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
      <div className="flex justify-center items-center gap-16">
        <svg
          className="w-[100px]"
          fill={darkMode ? "#fff" : "#000"}
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>playstation5</title>{" "}
            <path d="M8.063 15.555c0.572-0.005 1.034-0.47 1.034-1.043s-0.462-1.038-1.033-1.043h-7.014c-0.025-0.001-0.045-0.021-0.045-0.047 0 0 0-0 0-0v0-0.595c0 0 0 0 0-0 0-0.025 0.020-0.045 0.045-0.045 0 0 0 0 0 0h7.689c0.934 0.026 1.682 0.79 1.682 1.729s-0.747 1.702-1.68 1.729l-0.002 0h-5.319c-0.575 0-1.041 0.466-1.041 1.041 0 0 0 0.001 0 0.001v-0 1.891c0 0.025-0.020 0.045-0.045 0.045 0 0 0 0 0 0h-1.283c-0 0-0 0-0 0-0.025 0-0.045-0.020-0.045-0.045 0-0.002 0-0.003 0-0.005l-0 0v-1.891c0.004-0.952 0.776-1.722 1.728-1.722 0.001 0 0.001 0 0.002 0h-0zM21.617 15.197v-2.37c0-0.025 0.020-0.045 0.045-0.045h9.132c0.025 0 0.046 0.020 0.047 0.045v0.595c-0.001 0.025-0.021 0.046-0.047 0.047h-7.759c-0.025 0-0.045 0.020-0.045 0.045 0 0 0 0 0 0v0 1.544c0 0.001 0 0.002 0 0.003 0 0.273 0.221 0.494 0.494 0.494 0 0 0.001 0 0.001 0h5.777c0.969 0.052 1.734 0.851 1.734 1.828s-0.766 1.775-1.73 1.827l-0.005 0h-7.599c0 0 0 0-0 0-0.025 0-0.045-0.020-0.045-0.045 0 0 0 0 0-0v0-0.592c0-0.025 0.020-0.045 0.045-0.045h6.911c0.010 0 0.022 0 0.034 0 0.632 0 1.145-0.512 1.145-1.145s-0.512-1.145-1.145-1.145c-0.015 0-0.030 0-0.045 0.001l0.002-0h-5.907c-0.575 0-1.041-0.466-1.041-1.041 0-0 0-0.001 0-0.001v0zM14.063 19.21c0.954 0 1.728-0.774 1.728-1.728v0-2.972c0-0.575 0.466-1.041 1.041-1.041 0 0 0.001 0 0.001 0h3.354c0.025-0.001 0.045-0.021 0.045-0.047 0 0 0-0 0-0v0-0.595c0-0.025-0.020-0.045-0.045-0.045h-4.041c-0 0-0.001 0-0.001 0-0.954 0-1.728 0.774-1.728 1.728v0 2.975c0 0.575-0.466 1.042-1.041 1.042h-3.307c-0.025 0-0.045 0.020-0.045 0.045v0 0.595c0 0.025 0.020 0.045 0.045 0.045 0 0 0 0 0 0v0z"></path>{" "}
          </g>
        </svg>

        <section className="flex flex-col items-start justify-center gap-1">
          <div className="flex justify-center items-center gap-3">
            <svg className="w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E3C129" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 7.30872C10.6809 7.27322 9.5 7.86998 9.5 9.50001C9.5 12.5 15 11 15 14C15 15.711 13.5362 16.4462 12 16.391M12 7.30872V5.5M12 16.391V18.5" stroke="#E3C129" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <label>1,805</label>
          </div>
          
          <div className="flex justify-center items-center gap-3">
            <svg className="w-6" stroke="#007bff" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#007bff"></path> </g></svg>
            <label>3,999,945</label>
          </div>
          {/* <svg className="w-4" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>onboard-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M46,24A22,22,0,0,1,26,45.9V20.8l4.6,4.6a2,2,0,0,0,3.1-.2,2.1,2.1,0,0,0-.4-2.7l-7.9-7.9a1.9,1.9,0,0,0-2.8,0l-7.9,7.9a2.1,2.1,0,0,0-.4,2.7,2,2,0,0,0,3.1.2L22,20.8V45.9A22,22,0,1,1,46,24Z"></path> </g> </g> </g></svg> */}
        </section>
      </div>

      <div className="flex justify-end items-center gap-8 w-[70%]">
        <NavButtons showPlayersBox={showPlayersBox} setShowPlayersBox={setShowPlayersBox} logIn={logIn} setLogIn={setLogIn} showNotificationBox={showNotificationBox} setShowNotificationBox={setShowNotificationBox} showUserInterestsBox={showUserInterestsBox} setShowUserInterestsBox={setShowUserInterestsBox} showPlay2Win={showPlay2Win} setShowPlay2Win={setShowPlay2Win} showStoreBox={showStoreBox} setShowStoreBox={setShowStoreBox} darkMode={darkMode} />
        <button className="border-2 border-blue-500 rounded-full"
          onClick={() => {
            if (logIn) { setLogIn(false); return; }
            if (showPlayersBox) setShowPlayersBox(false); setLogIn(true);
          }}
        >
          <img src={userImg || `Players/${10}.png`} className="w-[50px] cursor-pointer rounded-full" />
        </button>
      </div>
    </nav>
  );
}