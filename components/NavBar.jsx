import NavButtons from "./NavButtons";

export default function NavBar({ showPlayersBox, setShowPlayersBox, logIn, setLogIn, userImg, showNotificationBox, setShowNotificationBox, showUserInterestsBox, setShowUserInterestsBox, showPlay2Win, setShowPlay2Win, showStoreBox, setShowStoreBox }) {
  return (
    <nav className="w-[1200px] h-[70px] pl-10 pr-10 flex justify-between items-center rounded-2xl border bg-black/20 backdrop-blur-[5px] shadow-[0_4px_30px_rgba(0,0,0,0.7)]">
      <div className="flex justify-center items-center gap-16">
        <svg
          className="w-[100px]"
          fill="#fff"
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

        <section className="flex flex-col items-start gap-1">
          <div className="flex justify-center items-center gap-3">
            <svg className="w-5" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M256,0C114.6,0,0,114.6,0,256c0,141.4,114.6,256,256,256s256-114.6,256-256C512,114.6,397.4,0,256,0z M256,42.7 c35.4,0,64,28.6,64,64s-28.6,64-64,64s-64-28.6-64-64S220.6,42.7,256,42.7z M53.3,213.3c0-35.4,28.6-64,64-64s64,28.6,64,64 s-28.6,64-64,64S53.3,248.7,53.3,213.3z M170.7,437.3c-35.4,0-64-28.6-64-64s28.6-64,64-64s64,28.6,64,64S206,437.3,170.7,437.3z M213.3,256c0-23.5,19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7s-19.1,42.7-42.7,42.7S213.3,279.5,213.3,256z M341.3,437.3 c-35.4,0-64-28.6-64-64s28.6-64,64-64s64,28.6,64,64S376.7,437.3,341.3,437.3z M394.7,277.3c-35.4,0-64-28.6-64-64s28.6-64,64-64 s64,28.6,64,64S430,277.3,394.7,277.3z"></path> </g></svg>
            <label>1,805</label>
          </div>
          <div className="flex justify-center items-center gap-3">
            <svg className="w-5" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M232.5,343.9c-10.4-18-19.2-36.5-27.2-55.2c-35.2,60.1-57.8,126.7-66.6,195.5c67.3,34.6,148.5,38.6,221.2,6.3 C309.9,451.2,266.2,402.3,232.5,343.9z M258.7,316.4c34.5,60.5,80.8,113.4,136,155.4c63.6-41,107.7-109.4,116-188.4 c-59,23.6-123.2,37-190.6,37C299.3,320.4,278.9,318.8,258.7,316.4z M202.6,228.5C132.9,228.1,63.9,241.8,0,268.6 c3.7,75.6,40.8,147.9,105.2,194.7c9-62.9,29.5-125.2,63.3-183.6C178.8,261.7,190.4,244.8,202.6,228.5z M253.3,196.1 c-34.5-60.5-80.8-113.5-136-155.4C53.7,81.7,9.6,150.1,1.3,229.1c59-23.6,123.2-37,190.6-37C212.7,192.1,233.1,193.7,253.3,196.1z M279.5,168.7c10.4,18,19.2,36.5,27.2,55.2c35.2-60.1,57.8-126.7,66.6-195.5C306-6.2,224.8-10.2,152.1,22.1 C202.1,61.3,245.8,110.3,279.5,168.7z M309.4,284c69.7,0.4,138.7-13.3,202.6-40.1C508.3,168.3,471.2,96,406.9,49.2 c-9,62.9-29.6,125.2-63.3,183.6C333.2,250.8,321.6,267.7,309.4,284z"></path> </g></svg>
            <label>3,999,945</label>
          </div>
          {/* <svg className="w-4" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>onboard-solid</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M46,24A22,22,0,0,1,26,45.9V20.8l4.6,4.6a2,2,0,0,0,3.1-.2,2.1,2.1,0,0,0-.4-2.7l-7.9-7.9a1.9,1.9,0,0,0-2.8,0l-7.9,7.9a2.1,2.1,0,0,0-.4,2.7,2,2,0,0,0,3.1.2L22,20.8V45.9A22,22,0,1,1,46,24Z"></path> </g> </g> </g></svg> */}
        </section>
      </div>

      <div className="flex justify-end items-center gap-8 w-[70%]">
        <NavButtons showPlayersBox={showPlayersBox} setShowPlayersBox={setShowPlayersBox} logIn={logIn} setLogIn={setLogIn} showNotificationBox={showNotificationBox} setShowNotificationBox={setShowNotificationBox} showUserInterestsBox={showUserInterestsBox} setShowUserInterestsBox={setShowUserInterestsBox} showPlay2Win={showPlay2Win} setShowPlay2Win={setShowPlay2Win} showStoreBox={showStoreBox} setShowStoreBox={setShowStoreBox} />
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