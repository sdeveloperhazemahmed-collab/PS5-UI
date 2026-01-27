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

export default function App() {
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

  const [logIn, setLogIn] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showPlay2Win, setShowPlay2Win] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [showStoreBox, setShowStoreBox] = useState(false);
  const [showManageBox, setShowManageBox] = useState(false);
  const [showPlayersBox, setShowPlayersBox] = useState(false);
  const [showNotificationBox, setShowNotificationBox] = useState(false);
  const [showUserInterestsBox, setShowUserInterestsBox] = useState(false);

  const [isRead, setIsRead] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, name: "Abdelrahman Ahmed", time: "11m", text: `wants to chanllenge you to a ${<strong>Rocket League</strong>} game.`, image: "notification_images/1.jpg", isRead: false, isAccepted: null },
    { id: 2, name: "Omar Madbouly", time: "1h", text: "sent you a friend request.", image: "notification_images/2.jpg", isRead: false, isAccepted: null },
    { id: 3, name: "New Updates", time: "9h", text: "...", image: null, isRead: false, isAccepted: "none" },
    { id: 4, name: "Yara Ibrahim", time: "13h", text: "Accepted your friend request", image: "notification_images/3.jpg", isRead: false, isAccepted: "none" },
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
    <div className="flex flex-col gap-20 justify-start items-center h-[100vh]">
      <header className="flex flex-col justify-center items-center mt-14">
        <NavBar showPlayersBox={showPlayersBox} setShowPlayersBox={setShowPlayersBox} logIn={logIn} setLogIn={setLogIn} userImg={userImg} showNotificationBox={showNotificationBox} setShowNotificationBox={setShowNotificationBox} showUserInterestsBox={showUserInterestsBox} setShowUserInterestsBox={setShowUserInterestsBox} showPlay2Win={showPlay2Win} setShowPlay2Win={setShowPlay2Win} showStoreBox={showStoreBox} setShowStoreBox={setShowStoreBox} />
        <Clock time={time} setTime={setTime} volume={volume} setVolume={setVolume} darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <main>
        {logIn && !currentUser && (
          <div className="flex items-center justify-around w-[800px] h-[400px] rounded-2xl border bg-black/20 backdrop-blur-[5px] shadow-[0_4px_30px_rgba(0,0,0,0.7)] relative z-10">
            <ImgInput imgButtonRef={imgButtonRef} fileInputRef={fileInputRef} userImg={userImg} setUserImg={setUserImg} username={username} email={email} password={password} />
            <SignForm isSignUpMode={isSignUpMode} setIsSignUpMode={setIsSignUpMode} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} email={email} setEmail={setEmail} username={username} setUsername={setUsername} userImg={userImg} setCurrentUser={setCurrentUser} setLogIn={setLogIn} />
          </div>
        )}

        {showPlayersBox && (<PlayersWindow addPlayer={addPlayer} players={players} setPlayers={setPlayers} hovered={hovered} setHovered={setHovered} showPlayersBox={showPlayersBox} handleRename={handleRename} showManageBox={showManageBox} setShowManageBox={setShowManageBox} />)}

        {showNotificationBox && (<NotificationWindow notifications={notifications} setNotifications={setNotifications} isRead={isRead} setIsRead={setIsRead} />)}

        {showUserInterestsBox && (<UserInterests />)}

        {showPlay2Win && (<Play2Win />)}

        {showStoreBox && (<StoreWindow />)}

        <Games title={title} setTitle={setTitle} darkMode={darkMode} />
      </main>

      <footer className='fixed bottom-0 mb-7'>
        2026 Fake PS5 website. Just for learning.
      </footer>
    </div>
  );
}