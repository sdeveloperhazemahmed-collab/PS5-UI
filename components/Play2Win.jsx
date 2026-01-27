import Play2WinCards from "./Play2WinCards";

export default function Play2Win() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 p-5 pt-[84px] w-[800px] h-[400px] rounded-2xl border bg-black/20 backdrop-blur-[5px] shadow-[0_4px_30px_rgba(0,0,0,0.7)] relative z-10">
            <h1 className="absolute top-5 font-thin text-4xl">Play2Win</h1>
            {/* لما يعدي 24 ساعة يقدر يكسب تاني */}
            <Play2WinCards />
        </div>
    );
}