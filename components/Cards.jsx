export default function Cards({ addPlayer, players, setPlayers, hovered, setHovered, showManageBox }) {
  const deleteCard = (id) => {
    if (players.length > 1) {
      setPlayers((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="flex gap-4 w-full h-[238px] overflow-x-auto scroll-smooth ps-scroll pb-2 ">
      {players.map((player) => (
        <div
          key={player.id}
          className="flex flex-col justify-center items-center gap-3 rounded-xl w-[23.2%] h-[100%] transition-all border-transparent border bg-[#e6e9ee] dark:bg-[#1a1a1a] hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0"
        >
          <button
            className="group flex items-center justify-center absolute top-1 right-1 border border-[#1a1a1a] dark:border-white rounded-full hover:bg-[#1a1a1a] dark:hover:bg-white w-5 h-5"
            onClick={() => {
              deleteCard(player.id);
            }}
          >
            <div className="absolute h-[12px] group-hover:rotate-45 dark:group-hover:bg-[#1a1a1a] group-hover:bg-white w-[2px] bg-[#1a1a1a] dark:bg-white transition-all duration-200 group-hover:shadow-[0_0_25px_rgb(0,170,255)]"></div>
            <div className="absolute h-[2px] w-[12px] group-hover:rotate-45 dark:group-hover:bg-[#1a1a1a] group-hover:bg-white bg-[#1a1a1a] dark:bg-white transition-all duration-200 group-hover:shadow-[0_0_25px_rgb(0,170,255)]"></div>
          </button>
          <img
            className="w-[70%] cursor-pointer rounded-full"
            src={`Players/${player.id - 1}.avif`}
          />
          <p className="text-[20px] font-thin text-[#1a1a1a] dark:text-white">{player.name}</p>
        </div>
      ))}

      {players.length < 10 && !showManageBox && (
        <div
          className={`flex flex-col justify-center items-center gap-3 rounded-xl w-[23.2%] h-[100%] transition-all border bg-[#e5e5e574] dark:bg-[#1a1a1a74] border-blue-600 dark:border-blue-500 backdrop-blur-[5px] flex-shrink-0 ${hovered ? "hover:shadow-[0_0_7px_rgb(37,99,235)]" : ""
            }`}
        >
          <button
            className="group flex justify-center items-center relative w-[65%] h-[50%] border border-blue-600 dark:border-blue-500 cursor-pointer rounded-full"
            src="Players/1.avif"
            onClick={addPlayer}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="absolute h-[60%] w-[3px] bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover:shadow-[0_0_25px_rgb(0,170,255)]"></div>
            <div className="absolute w-[60%] h-[3px] bg-blue-600 dark:bg-blue-500 transition-all duration-300 group-hover:shadow-[0_0_25px_rgb(0,170,255)]"></div>
          </button>
          <p className="text-[20px] font-thin">Add Player</p>
        </div>
      )}
    </div>
  );
}