export default function NotificationCards({ isRead, setIsRead, notifications, setNotifications }) {
// export default function NotificationCards({ isRead, setIsRead, notifications, setNotifications , darkMode, bg, setBg, PSDark, PSLight }) {
  const handleResponse = (id, accepted) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, isAccepted: accepted, isRead: true } : n
      )
    );
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center gap-4 w-full h-full overflow-y-auto scroll-smooth ps-scroll pb-2">
        {notifications.map((n) => (
          <section key={n.id} className="flex justify-start items-center gap-10 pl-8 rounded-xl w-full h-fit py-3 transition-all border-transparent border white bg-[#e6e9ee] dark:bg-[#1a1a1a] dark:group-hover:bg-[#1a1a1a] group-hover:bg-white hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0">
            <div className={`w-3 h-3 rounded-full ${n.isRead || isRead ? "bg-transparent" : "bg-blue-500"}`}></div>
            {n.image ? <img src={n.image} className="w-[85px] cursor-pointer rounded-full" /> : n.svg}
            <div className="flex flex-col gap-3 justify-center items-start w-[66%]">
              <div className="w-full">
                <div className="flex items-center w-full relative">
                  <p className="text-[20px] font-bold">{n.name}</p>
                  <p className="text-[16px] font-thin absolute right-0 italic">{n.time}</p>
                </div>
                <p className="text-[18px] font-thin">{n.text}</p>
              </div>
              {n.isAccepted === "none" ? (<></>) : (
                <div className="flex justify-center items-center gap-8 w-fit h-6">
                  {n.isAccepted === null && (
                    <>
                      <button
                        onClick={() => handleResponse(n.id, true)}
                        className="border-[#1a1a1a] dark:border-white text-white dark:text-white transition-all duration-200 py-0 px-8 rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:translate-y-[1px]">Accept</button>
                      <button
                        onClick={() => handleResponse(n.id, false)}
                        className="hover:bg-[#1a1a1a] dark:hover:bg-white text-[#1a1a1a] dark:text-white transition-all duration-200 py-0 px-8 rounded-md border-y border-[#1a1a1a] dark:border-white hover:bg-black/40 active:bg-black/70 active:translate-y-[1px]">Decline</button>
                    </>
                  )}
                  {n.isAccepted === true && <p className="font-medium text-[rgb(0,200,0)] py-0">Accepted!</p>}
                  {n.isAccepted === false && <p className="font-medium text-[rgb(200,0,0)] py-0">Declined!</p>}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <button
        onClick={() => setIsRead(true)}
        className="flex justify-center items-center w-[60%] p-1 cursor-pointer transition-all duration-200 backdrop-blur-[10px] active:translate-y-[1px] rounded-lg text-[#1a1a1a] dark:text-white dark:active:bg-[#2424247c] dark:bg-[#1a1a1a] active:bg-[#dbdbdb7c] bg-[#e6e9ee] hover:shadow-[0_0_7px_rgb(37,99,235)] dark:hover:shadow-[0_0_7px_rgb(0,170,255)] dark:hover:border-blue-500 hover:border-blue-600 border border-[#1a1a1a] dark:border-white"
        >Mark all as read</button>
    </>
  );
}