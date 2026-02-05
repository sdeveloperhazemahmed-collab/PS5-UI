import { useState } from "react";

export default function Play2WinCards() {
  const [isChoosen, setIsChoosen] = useState(false);

  const handleChoosen = () => {
    
  }

  return (
    <>
      <div className="flex justify-center items-center gap-4 w-full h-[238px] overflow-x-auto scroll-smooth ps-scroll pb-2">
        <span className={`flex flex-col justify-center items-center gap-3 rounded-full cursor-pointer w-[28%] h-[90%] transition-all border-transparent border bg-[#e6e9ee] dark:bg-[#1a1a1a] hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0 ${isChoosen ? ("") : ("")}`}></span>
        <span className={`flex flex-col justify-center items-center gap-3 rounded-full cursor-pointer w-[28%] h-[90%] transition-all border-transparent border bg-[#e6e9ee] dark:bg-[#1a1a1a] hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0 ${isChoosen ? ("") : ("")}`}></span>
        <span className={`flex flex-col justify-center items-center gap-3 rounded-full cursor-pointer w-[28%] h-[90%] transition-all border-transparent border bg-[#e6e9ee] dark:bg-[#1a1a1a] hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0 ${isChoosen ? ("") : ("")}`}></span>
      </div>

      <button className="flex justify-center items-center w-[60%] p-1 cursor-pointer transition-all duration-200 backdrop-blur-[10px] active:translate-y-[1px] text-[#1a1a1a] dark:text-white dark:active:bg-[#2424247c] dark:bg-[#1a1a1a] active:bg-[#dbdbdb7c] bg-[#e6e9ee] hover:shadow-[0_0_7px_rgb(37,99,235)] dark:hover:shadow-[0_0_7px_rgb(0,170,255)] dark:hover:border-blue-500 hover:border-blue-600 border border-[#1a1a1a] dark:border-white rounded-lg"
      >Choose your gift</button>
    </>
  );
}
// spark animation  يلمع من الشمال لليمين ويعدي لي كل واحده