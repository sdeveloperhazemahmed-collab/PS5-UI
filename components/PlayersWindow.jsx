import Cards from './Cards';
import PlayersEditingWindow from './PlayersEditingWindow';

export default function PlayersWindow({ addPlayer, players, setPlayers, hovered, setHovered, handleRename, showManageBox, setShowManageBox }) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-[#1a1a1a] dark:text-white p-5 pt-[84px] w-[800px] h-[400px] rounded-2xl border border-[#1a1a1a] dark:border-white bg-black/20 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.7)] relative z-10">
            {/* <h1 className="font-thin text-4xl">Players</h1> */}
            <h1 className="text-[#1a1a1a] dark:text-white absolute top-5 font-thin text-4xl">Players</h1>
            <Cards addPlayer={addPlayer} players={players} setPlayers={setPlayers} hovered={hovered} setHovered={setHovered} showManageBox={showManageBox} />
            <PlayersEditingWindow showManageBox={showManageBox} setShowManageBox={setShowManageBox} players={players} handleRename={handleRename} />
        </div>
    );
}