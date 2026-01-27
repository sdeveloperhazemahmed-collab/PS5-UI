export default function NotificationCards({ isRead, setIsRead, notifications, setNotifications }) {
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
          <section key={n.id} className="flex justify-start items-center gap-10 pl-8 rounded-xl w-full h-fit py-3 transition-all border-transparent border bg-[#1a1a1a] hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0" >
            <div className={`w-3 h-3 rounded-full ${n.isRead || isRead ? "bg-transparent" : "bg-blue-500"}`}></div>
            {n.image ? <img src={n.image} className="w-[85px] cursor-pointer rounded-full" /> : <svg className="w-20 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 12.0002C2 7.28611 2 4.92909 3.46447 3.46462C4.70529 2.2238 6.58687 2.03431 10 2.00537M22 12.0002C22 7.28611 22 4.92909 20.5355 3.46462C19.2947 2.2238 17.4131 2.03431 14 2.00537" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"></path> <path d="M10 22C7.19974 22 5.79961 22 4.73005 21.455C3.78924 20.9757 3.02433 20.2108 2.54497 19.27C2 18.2004 2 16.8003 2 14C2 11.1997 2 9.79961 2.54497 8.73005C3.02433 7.78924 3.78924 7.02433 4.73005 6.54497C5.79961 6 7.19974 6 10 6H14C16.8003 6 18.2004 6 19.27 6.54497C20.2108 7.02433 20.9757 7.78924 21.455 8.73005C22 9.79961 22 11.1997 22 14C22 16.8003 22 18.2004 21.455 19.27C20.9757 20.2108 20.2108 20.9757 19.27 21.455C18.2004 22 16.8003 22 14 22" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 11L12 17M12 17L14.5 14.5M12 17L9.5 14.5" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}
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
                        className="transition-all duration-200 py-0 px-8 rounded-md bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:translate-y-[1px]">Accept</button>
                      <button
                        onClick={() => handleResponse(n.id, false)}
                        className="transition-all duration-200 py-0 px-8 rounded-md border-y border-white hover:bg-black/40 active:bg-black/70 active:translate-y-[1px]">Decline</button>
                    </>
                  )}
                  {n.isAccepted === true && <p>Accepted!</p>}
                  {n.isAccepted === false && <p>Declined!</p>}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <button
        onClick={() => setIsRead(true)}
        className="flex justify-center items-center w-[60%] p-1 cursor-pointer transition-all duration-200 backdrop-blur-[10px] active:translate-y-[1px] active:bg-[#2424247c] bg-[#1a1a1a] hover:shadow-[0_0_7px_rgb(0,170,255)] hover:border-blue-500 border rounded-lg text-white">Mark all as read</button>
    </>
  );
}