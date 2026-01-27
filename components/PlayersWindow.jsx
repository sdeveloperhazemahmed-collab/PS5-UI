import Cards from './Cards';
import PlayersEditingWindow from './PlayersEditingWindow';

export default function PlayersWindow({ addPlayer, players, setPlayers, hovered, setHovered, handleRename, showManageBox, setShowManageBox }) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-5 pt-[84px] w-[800px] h-[400px] rounded-2xl border bg-black/20 backdrop-blur-[5px] shadow-[0_4px_30px_rgba(0,0,0,0.7)] relative z-10">
            {/* <h1 className="font-thin text-4xl">Players</h1> */}
            <h1 className="absolute top-5 font-thin text-4xl">Players</h1>
            <Cards addPlayer={addPlayer} players={players} setPlayers={setPlayers} hovered={hovered} setHovered={setHovered} showManageBox={showManageBox} />
            <PlayersEaditingWindow showManageBox={showManageBox} setShowManageBox={setShowManageBox} players={players} handleRename={handleRename} />
        </div>
    );
}