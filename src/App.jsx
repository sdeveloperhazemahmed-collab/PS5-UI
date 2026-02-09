// import { gsap } from "gsap";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// gsap.registerPlugin(MotionPathPlugin);
import './App.css';
import { useState, useEffect, useRef } from "react";
import Clock from "../components/Clock";
import Games from "../components/Games";
import NavBar from "../components/NavBar";
import SignForm from "../components/SignForm";
import ImgInput from "../components/ImgInput";
import Play2Win from "../components/Play2Win";
import StoreWindow from "../components/StoreWindow";
import UserInterests from "../components/UserInterests";
import PlayersWindow from "../components/PlayersWindow";
import NotificationWindow from "../components/NotificationWindow";

import PSDarkBG from "../data/PSDarkBg.js";
import PSLightBG from "../data/PSLightBg.js";

export default function App() {
  const PSDark = PSDarkBG;
  const PSLight = PSLightBG;
  const [bg, setBg] = useState(PSLight());

  const [volume, setVolume] = useState(0.3);
  const [time, setTime] = useState("00:00:00");
  const [players, setPlayers] = useState([{ id: 1, name: "Player 1" }]);

  const imgButtonRef = useRef(null);
  const fileInputRef = useRef(null);
  const [userImg, setUserImg] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [PS5, setPS5] = useState(false);
  const [PS4, setPS4] = useState(false);
  const [DEAL, setDEAL] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showPlay2Win, setShowPlay2Win] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showStoreBox, setShowStoreBox] = useState(false);
  const [showManageBox, setShowManageBox] = useState(false);
  const [showPlayersBox, setShowPlayersBox] = useState(false);
  const [isConfirmedShipping, setIsConfirmedShipping] = useState(false);
  const [showNotificationBox, setShowNotificationBox] = useState(false);
  const [showStoreCartWindow, setShowStoreCartWindow] = useState(false);
  const [showUserInterestsBox, setShowUserInterestsBox] = useState(false);
  const [showStoreCategoryWindow, setShowStoreCategoryWindow] = useState(false);
  const [showStoreFavouriteWindow, setShowStoreFavouriteWindow] = useState(false);

  const [isRead, setIsRead] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, name: "Abdelrahman Ahmed", time: "11m", text: <>wants to chanllenge you to a <strong>Rocket League</strong> game.</>, svg: null, image: "notification_images/1.jpg", isRead: false, isAccepted: null },
    {
      id: 2, name: "New Updates", time: "1h", text: <>New update has been installed. Check out what's new!</>,
      svg: (<svg className="w-20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m 8 0 c -0.257812 0 -0.511719 0.0976562 -0.707031 0.292969 l -1.707031 1.707031 h -2.585938 c -0.550781 0 -1 0.449219 -1 1 v 2.585938 l -1.707031 1.707031 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 1.707031 1.707031 v 2.585938 c 0 0.550781 0.449219 1 1 1 h 2.585938 l 1.707031 1.707031 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 1.707031 -1.707031 h 2.585938 c 0.550781 0 1 -0.449219 1 -1 v -2.585938 l 1.707031 -1.707031 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -1.707031 -1.707031 v -2.585938 c 0 -0.550781 -0.449219 -1 -1 -1 h -2.585938 l -1.707031 -1.707031 c -0.195312 -0.1953128 -0.449219 -0.292969 -0.707031 -0.292969 z m 0 5 c 0.257812 0 0.511719 0.097656 0.707031 0.292969 l 2 2 c 0.183594 0.1875 0.289063 0.441406 0.285157 0.707031 h 0.007812 v 1 h -2 v 2 h -2 v -2 h -2 v -1 h 0.007812 c -0.003906 -0.265625 0.101563 -0.519531 0.285157 -0.707031 l 2 -2 c 0.195312 -0.195313 0.449219 -0.292969 0.707031 -0.292969 z m 0 0" fill="#3b82f6"></path> </g></svg>),
      image: null, isRead: false, isAccepted: "none"
    },
    { id: 3, name: "Omar Madbouly", time: "9h", text: <>sent you a friend request.</>, svg: null, image: "notification_images/2.jpg", isRead: false, isAccepted: null },
    { id: 4, name: "Yara Ibrahim", time: "13h", text: <>Accepted your friend request</>, svg: null, image: "notification_images/3.jpg", isRead: false, isAccepted: "none" },
    {
      id: 5, name: "Regular Maintenance Times", time: "22h", text: <>Regular Maintenance will be held during the below times:</>,
      svg: (<svg className='w-20' viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>maintenance-info</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Combined-Shape" fill="#3b82f6" transform="translate(42.666667, 58.666667)"> <path d="M117.333333,48 C182.134744,48 234.666667,100.531923 234.666667,165.333333 C234.666667,177.516512 232.809822,189.266001 229.363697,200.314237 L346.710217,317.661885 C367.98629,338.937958 367.98629,373.433288 346.710217,394.709361 C325.434144,415.985434 290.938814,415.985434 269.662741,394.709361 L152.315234,277.363386 C141.266709,280.80971 129.516879,282.666667 117.333333,282.666667 C52.5319227,282.666667 7.10542736e-15,230.134744 7.10542736e-15,165.333333 C7.10542736e-15,152.827953 1.95635722,140.779505 5.57971243,129.477348 L61.0818825,184.888889 L111.319797,168.156815 C112.394454,166.856793 113.540203,165.595781 114.757044,164.37894 L116.379797,162.756188 C117.593198,161.542787 118.85052,160.400077 120.146646,159.328057 L136.888889,109.149054 L81.3212183,53.6298873 C92.6685218,49.9744211 104.770352,48 117.333333,48 Z M384,90.6666667 L384,218.666667 L341.333333,218.666667 L341.333333,90.6666667 L384,90.6666667 Z M362.666667,1.42108547e-14 C377.39426,1.42108547e-14 389.333333,11.9390733 389.333333,26.6666667 C389.333333,41.39426 377.39426,53.3333333 362.666667,53.3333333 C347.939073,53.3333333 336,41.39426 336,26.6666667 C336,11.9390733 347.939073,1.42108547e-14 362.666667,1.42108547e-14 Z"> </path> </g> </g> </g></svg>),
      image: null, isRead: false, isAccepted: "none"
    },
    {
      id: 6, name: "Get Some Special Offers at the Store!", time: "28/01/2026", text: <>A special deals combining PS<sup>TM</sup> Coins and all legends on PS...</>,
      svg: (<svg className='w-20' viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="#3b82f6"> <path d="m 13 6.5 c 0 2.761719 -2.238281 5 -5 5 s -5 -2.238281 -5 -5 s 2.238281 -5 5 -5 s 5 2.238281 5 5 z m 0 0"></path> <path d="m 3 6.5 h 10 v 6 h -10 z m 0 0"></path> <path d="m 2.5 13 h 11 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -11 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"></path> <path d="m 10 14 c 0 0.714844 -0.382812 1.375 -1 1.730469 c -0.617188 0.359375 -1.382812 0.359375 -2 0 c -0.617188 -0.355469 -1 -1.015625 -1 -1.730469"></path> <path d="m 9.5 1.5 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"></path> </g> </g></svg>),
      image: null, isRead: false, isAccepted: "none"
    },
    {
      id: 7, name: "Ali Lol", time: "11m", text: <>wants to chanllenge you to a <strong>Resident Evil 7 Biohavard</strong> ga...</>,
      svg: null,
      image: "notification_images/4.jpg", isRead: false, isAccepted: null
    },
    {
      id: 8, name: "Known Issues", time: "26/01/2026", text: <>See below for a list of issues recently confirmed by the dev t...</>,
      svg: (<svg className='w-20' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 0V1.60002C7.32311 1.53443 7.65753 1.5 8 1.5C8.34247 1.5 8.67689 1.53443 9 1.60002V0H11V2.49963C11.8265 3.12041 12.4543 3.99134 12.7711 5H3.2289C3.5457 3.99134 4.17354 3.12041 5 2.49963V0H7Z" fill="#3b82f6"></path> <path d="M0 7V9H3V10.4957L0.225279 11.2885L0.774721 13.2115L3.23189 12.5095C3.87194 14.5331 5.76467 16 8 16C10.2353 16 12.1281 14.5331 12.7681 12.5095L15.2253 13.2115L15.7747 11.2885L13 10.4957V9H16V7H9V12H7V7H0Z" fill="#3b82f6"></path> </g></svg>),
      image: null, isRead: false, isAccepted: "none"
    },
  ]);

  const [storeItems, setStoreItems] = useState([
    // ==== PS5 ====
    { id: 1, specialDeal: true, name: "PlayStation Two Devices", text: "Twin consoles bundle of new g...", category: "PS5", afterOfferPrice: 56100, price: 66000, image: "store/PS5Deal.jpg", favourite: false, colors: ["bg-gray-400", "bg-white"], reviews: 5, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 2, specialDeal: true, name: "PlayStation Accessories", text: "Package of accessories includin...", category: "PS5", afterOfferPrice: 22000, price: 26900, image: "store/ps5-1140x642.jpg", favourite: false, colors: ["bg-gray-400", "bg-white", "bg-black", "bg-red-500", "bg-blue-600"], reviews: 35, stars: 5, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 3, specialDeal: true, name: "PS5 Standard Console", text: "1TB SSD, Ultra HD gaming", category: "PS5", afterOfferPrice: 45000, price: 52000, image: "store/Sony-reveals-the-new-PS5-console-and-is-the-future - Copy.jpg", favourite: false, colors: ["bg-white", "bg-black"], reviews: 50, stars: 3, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 4, specialDeal: false, name: "PS5 Pulse 3D Headset", text: "Immersive 3D audio headset fo...", category: "PS5", afterOfferPrice: 1800, price: 2200, image: "store/PlayStation-Pulse-Elite-wireless-headset.jpg", favourite: false, colors: ["bg-gray-400", "bg-white", "bg-black", "bg-red-500", "bg-blue-600"], reviews: 80, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 5, specialDeal: false, name: "DualSense Controller", text: "Wireless controller with adapti...", category: "PS5", afterOfferPrice: 2500, price: 3000, image: "store/wp11889270.jpg", favourite: false, colors: ["bg-white", "bg-black", "bg-red-500", "bg-blue-600"], reviews: 200, stars: 5, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 6, specialDeal: true, name: "PS5 Essentials Bundle", text: "Console + Controller + Headset", category: "PS5", afterOfferPrice: 50000, price: 60000, image: "store/PS5-2.jpg", favourite: false, colors: ["bg-white", "bg-black"], reviews: 40, stars: 5, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},

    // ==== PS5 Accessories اضافية بدون specialDeal ====
    { id: 11, specialDeal: false, name: "PS5 Charging Station", text: "Charge up to 2 DualSense cont...", category: "PS5", afterOfferPrice: 700, price: 900, image: "store/y4b660897-5830-4bb8-bced-b2ada1cb894b.jpg", favourite: false, colors: ["bg-white", "bg-black", "bg-red-500", "bg-blue-600"], reviews: 22, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 12, specialDeal: false, name: "PS5 Media Remote", text: "Control movies & music easily", category: "PS5", afterOfferPrice: 600, price: 800, image: "store/media-remote-thumbnail-ps5-01-en-18sep20.jpg", favourite: false, colors: ["bg-white", "bg-black"], reviews: 15, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 13, specialDeal: false, name: "PS5 Console Skin", text: "Customizable skin for your PS5", category: "PS5", afterOfferPrice: 400, price: 600, image: "store/ps5-digital-console-modern-oak-skins_ab421f8f-eb02-47af-bb80-1758a9ddd729_2048x2048.jpg", favourite: false, colors: null, skins: ["/store/01NN4NlGPdL._SL1240_.jpg", "/store/11NN4NlGPdL._SL1240_.jpg", "/store/21NN4NlGPdL._SL1240_.jpg", "/store/31NN4NlGPdL._SL1240_.jpg", "/store/41NN4NlGPdL._SL1240_.jpg", "/store/51NN4NlGPdL._SL1240_.jpg"], reviews: 18, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},

    // ==== PS4 ====
    { id: 7, specialDeal: true, name: "PS4 Standard Console", text: "1TB storage, slim version", category: "PS4", afterOfferPrice: 14500, price: 16500, image: "store/y_2077823.jpg", favourite: false, colors: ["bg-black"], reviews: 42, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 8, specialDeal: false, name: "DualShock 4 Controller", text: "Wireless controller for PS4", category: "PS4", afterOfferPrice: 1200, price: 1500, image: "store/ps_top_2.jpg", favourite: false, colors: ["bg-black", "bg-white", "bg-[rgb(151,170,211)]", "bg-orange-400", "bg-[#f2d96a]", "bg-red-500", "bg-blue-600"], reviews: 120, stars: 5, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 9, specialDeal: false, name: "PS4 Gaming Headset", text: "Over-ear headset with surroun...", category: "PS4", afterOfferPrice: 850, price: 1200, image: "store/y_2077824.jpg", favourite: false, colors: ["bg-black"], reviews: 75, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 10, specialDeal: false, name: "PS4 Charging Station", text: "Charge up to 2 DualShock 4 co...", category: "PS4", afterOfferPrice: 500, price: 700, image: "store/z4b660897-5830-4bb8-bced-b2ada1cb894b.jpg", favourite: false, colors: ["bg-black", "bg-white"], reviews: 20, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},

    // ==== PS4 Accessories اضافية بدون specialDeal ====
    { id: 14, specialDeal: false, name: "PS4 Media Remote", text: "Control movies & music easily", category: "PS4", afterOfferPrice: 500, price: 650, image: "store/z1_gf7j7hZVoJ7PJELxI24t4g.jpg", favourite: false, colors: ["bg-black", "bg-white"], reviews: 12, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    { id: 15, specialDeal: false, name: "PS4 Console Skin", text: "Customizable skin for your PS4", category: "PS4", afterOfferPrice: 350, price: 500, image: "store/PS4P_4.jpg", favourite: false, colors: null, skins: ["/store/b0-dbaef5c9655da29ce616787392134349-1024-102.jpg", "/store/b1-dbaef5c9655da29ce616787392134349-1024-102.jpg", "/store/b2-dbaef5c9655da29ce616787392134349-1024-102.jpg", "/store/b3-dbaef5c9655da29ce616787392134349-1024-102.jpg", "/store/b4-dbaef5c9655da29ce616787392134349-1024-102.jpg", "/store/b5-dbaef5c9655da29ce616787392134349-1024-102.jpg"], reviews: 10, stars: 4, inCart: false, confirmedShipping: false, quantity: "", selectedColor: null,},
    // { id: 16, specialDeal: false, name: "PS4 Vertical Stand", text: "Keep your PS4 upright and ven...", category: "PS4", afterOfferPrice: 400, price: 550, image: "store/zz2flyl5mggkt61.jpg", favourite: false, colors: ["bg-black"], reviews: 8, stars: 4, inCart: false, },
  ]);



  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setTimeout(() => {
        setUsername(user.username);
        setEmail(user.email);
        setPassword(user.password);
        setConfirmPassword(user.password);
        setUserImg(user.image || null);
        if (user.image && imgButtonRef.current) {
          imgButtonRef.current.src = user.image;
        }
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);



  const handleRename = (id) => {
    const newName = prompt("Enter new name:");
    if (!newName) return;

    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name: newName } : p))
    );
  };

  const addPlayer = () => {
    const maxId = players.length ? Math.max(...players.map((p) => p.id)) : 0;
    setPlayers([...players, { id: maxId + 1, name: `Player ${maxId + 1}` }]);
  };



  return (
    <>
      {/* Overlay */}
      {/* <div className="fixed inset-0 bg-white/20 dark:bg-black/40 pointer-events-none z-0 transition"></div> */}
      
      <div className="flex flex-col gap-20 justify-start items-center h-[100vh]">
        <header className="flex flex-col justify-center items-center mt-14">
          <NavBar showPlayersBox={showPlayersBox} setShowPlayersBox={setShowPlayersBox} logIn={logIn} setLogIn={setLogIn} userImg={userImg} showNotificationBox={showNotificationBox} setShowNotificationBox={setShowNotificationBox} showUserInterestsBox={showUserInterestsBox} setShowUserInterestsBox={setShowUserInterestsBox} showPlay2Win={showPlay2Win} setShowPlay2Win={setShowPlay2Win} showStoreBox={showStoreBox} setShowStoreBox={setShowStoreBox} darkMode={darkMode} />
          <Clock time={time} setTime={setTime} volume={volume} setVolume={setVolume} darkMode={darkMode} setDarkMode={setDarkMode} setBg={setBg} PSDark={PSDark} PSLight={PSLight} />
        </header>

        <main>
          {logIn && !currentUser && (
            <div className="flex items-center justify-around w-[800px] h-[400px] rounded-2xl border bg-black/20 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.7)] relative z-10">
              <ImgInput imgButtonRef={imgButtonRef} fileInputRef={fileInputRef} userImg={userImg} setUserImg={setUserImg} username={username} email={email} password={password} />
              <SignForm isSignUpMode={isSignUpMode} setIsSignUpMode={setIsSignUpMode} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} email={email} setEmail={setEmail} username={username} setUsername={setUsername} userImg={userImg} setCurrentUser={setCurrentUser} setLogIn={setLogIn} showStoreBox={showStoreBox} setShowStoreBox={setShowStoreBox} />
            </div>
          )}
          {showPlayersBox && (<PlayersWindow addPlayer={addPlayer} players={players} setPlayers={setPlayers} hovered={hovered} setHovered={setHovered} showPlayersBox={showPlayersBox} handleRename={handleRename} showManageBox={showManageBox} setShowManageBox={setShowManageBox} />)}
          {showNotificationBox && (<NotificationWindow notifications={notifications} setNotifications={setNotifications} isRead={isRead} setIsRead={setIsRead} darkMode={darkMode} bg={bg} setBg={setBg} PSDark={PSDark} PSLight={PSLight} />)}
          {showUserInterestsBox && (<UserInterests />)}
          {showPlay2Win && (<Play2Win />)}
          {showStoreBox && (<StoreWindow storeItems={storeItems} setStoreItems={setStoreItems} darkMode={darkMode} showStoreCategoryWindow={showStoreCategoryWindow} setShowStoreCategoryWindow={setShowStoreCategoryWindow} showStoreCartWindow={showStoreCartWindow} setShowStoreCartWindow={setShowStoreCartWindow} showStoreFavouriteWindow={showStoreFavouriteWindow} setShowStoreFavouriteWindow={setShowStoreFavouriteWindow} PS5={PS5} setPS5={setPS5} PS4={PS4} setPS4={setPS4} DEAL={DEAL} setDEAL={setDEAL} isConfirmedShipping={isConfirmedShipping} setIsConfirmedShipping={setIsConfirmedShipping} />)}
          <Games title={title} setTitle={setTitle} darkMode={darkMode} bg={bg} setBg={setBg} PSDark={PSDark} PSLight={PSLight} />
        </main>

        <footer className='fixed bottom-0 mb-7 dark:text-white text-[#1a1a1a]'>
          2026 Fake PS5 website. Just for learning.
        </footer>
      </div>
    </>
  );
}