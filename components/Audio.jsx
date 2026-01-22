import { useEffect, useRef, useState } from "react";

export default function Audio({ volume, setVolume }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [lastVolume, setLastVolume] = useState(0.5);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        audioRef.current.play();
      }
      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);
    return () => document.removeEventListener("click", playMusic);
  }, [volume]);

  const toggleMute = () => {
    if (!muted) {
      setLastVolume(volume);
      setVolume(0);
      setMuted(true);
    } else {
      setVolume(lastVolume);
      setMuted(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="public/music.mp3" loop muted={muted} />

      <button onClick={toggleMute} className="text-white text-xl">
        {muted || volume === 0 ? "🔇" : "🔊"}
      </button>
    </>
  );
}
