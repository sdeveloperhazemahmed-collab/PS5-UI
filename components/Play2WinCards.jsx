import { useState } from "react";

export default function Play2WinCards() {
  const [isChoosen, setIsChoosen] = useState(false);
  return (
    <>
      <div className="flex justify-center items-center gap-4 w-full h-[238px] overflow-x-auto scroll-smooth ps-scroll pb-2">
        <div className={`flex flex-col justify-center items-center gap-3 rounded-full cursor-pointer w-[31%] h-[100%] transition-all border-transparent border bg-[#1a1a1a] hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0 ${isChoosen ? (""):("")}`}>
          {/* <p className="text-[20px] font-thin">player.name</p> */}
        </div>

        <div className="flex flex-col justify-center items-center gap-3 rounded-full cursor-pointer w-[31%] h-[100%] transition-all border-transparent border bg-[#1a1a1a] hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0">
          {/* <p className="text-[20px] font-thin">player.name</p> */}
        </div>
        
        <div className="flex flex-col justify-center items-center gap-3 rounded-full cursor-pointer w-[31%] h-[100%] transition-all border-transparent border bg-[#1a1a1a] hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0">
          {/* <p className="text-[20px] font-thin">player.name</p> */}
        </div>
      </div>

      <button className="flex justify-center items-center w-[60%] p-1 cursor-pointer transition-all duration-200 backdrop-blur-[10px] active:translate-y-[1px] active:bg-[#2424247c] bg-[#1a1a1a] hover:shadow-[0_0_7px_rgb(0,170,255)] hover:border-blue-500 border rounded-lg text-white"
      >Choose your gift</button>
    </>
  );
}
// spark animation  يلمع من الشمال لليمين ويعدي لي كل واحده