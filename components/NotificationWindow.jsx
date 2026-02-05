import NotificationCards from "./NotificationCards";

export default function NotificationWindow({ notifications, setNotifications, isRead, setIsRead, darkMode, bg, setBg, PSDark, PSLight }) {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-[#1a1a1a] dark:text-white p-5 pt-[84px] w-[800px] h-[400px] rounded-2xl border border-[#1a1a1a] dark:border-white bg-black/20 backdrop-blur-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.7)] relative z-10">
            <h1 className="absolute top-5 font-thin text-4xl">Notifications</h1>
            <NotificationCards isRead={isRead} setIsRead={setIsRead} notifications={notifications} setNotifications={setNotifications} darkMode={darkMode} bg={bg} setBg={setBg} PSDark={PSDark} PSLight={PSLight} />
        </div>
    );
}
