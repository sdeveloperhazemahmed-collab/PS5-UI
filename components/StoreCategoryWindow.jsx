export default function StoreCategoryWindow({ PS5, setPS5, PS4, setPS4, DEAL, setDEAL }) {
  return (
    <div className="flex items-center justify-center gap-10 text-[#1a1a1a] dark:text-white px-7 py-3 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-[20px] absolute top-[68px] right-40 z-10">
      <div className="flex gap-2 justify-center items-center">
        <input id="PS5" type="checkbox" name="category"
          checked={PS5} onChange={(e) => setPS5(e.target.checked)} />
        <label htmlFor="PS5">PS5</label>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <input id="PS4" type="checkbox" name="category"
          checked={PS4} onChange={(e) => setPS4(e.target.checked)} />
        <label htmlFor="PS4">PS4</label>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <input id="deal" type="checkbox" name="category"
          checked={DEAL} onChange={(e) => setDEAL(e.target.checked)} />
        <label htmlFor="deal">Deal</label>
      </div>
    </div>
  );
}
