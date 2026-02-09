export default function StoreFavouriteWindow({ PS5, PS4, DEAL, storeItems, setStoreItems }) {
  const FavItems = storeItems.filter(item => {
    const favourite = item.favourite === true;
    return favourite;
  });

  return (
    <div className="flex items-center justify-center gap-10 text-[#1a1a1a] dark:text-white p-5 pt-4 pb-4 w-[797px] rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-[20px] absolute top-[68px] z-10">
      <div className="flex items-start justify-start gap-4 h-[calc(238px*var(--card-scale))] flex-wrap w-full overflow-x-auto scroll-smooth ps-scroll">
        {FavItems.length === 0 ? (
          <p className="w-full text-center self-end text-[calc(14px*var(--card-scale))] text-[#1a1a1a74] dark:text-[#e5e5e574]">
            You don't have favourite items 😔
          </p>
        ) : (
          FavItems.map((item) => (
            <div key={item.id} className="group flex flex-col justify-start items-start transition-all duration-200 gap-[1px] p-[10px] rounded-xl w-[calc(25.5%*var(--card-scale))] h-[100%] border border-transparent bg-[#e6e9ee] dark:bg-[#1a1a1a] hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0 relative">
              <img src={item.image} className="w-[100%] cursor-pointer rounded-xl" />
              {item.specialDeal ? (
                // <div className="flex justify-center items-center absolute top-0 left-0 bg-red-500 text-white font-bold text-[12px] px-2 rounded-md">Deal</div>
                <div className="flex justify-center items-center absolute top-2 left-1 bg-red-600 text-transparent w-6 group-hover:w-16 group-hover:text-white group-hover:font-bold group-hover:text-[calc(12px*var(--card-scale))] group-hover:px-2 rounded-full transition-all duration-200">Deal</div>
                // <div className="flex justify-center items-center absolute top-2 left-1 self-center bg-red-600 text-white font-bold text-[calc(12px*var(--card-scale))] px-2 py-[2px]">Deal</div>
              ) : (
                <></>)}

              <div className="flex flex-col">
                <p className="text-[calc(12px*var(--card-scale))] text-[#1a1a1a74] dark:text-[#e5e5e574]">{item.category}</p>
                <p className="text-[calc(13px*var(--card-scale))] text-[#1a1a1a] dark:text-white font-medium">{item.name}</p>
                <p className="text-[calc(12px*var(--card-scale))] text-[#1a1a1a74] dark:text-[#e5e5e574]">{item.text}</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <section className="flex flex-col items-start justify-center">
                  <p className="text-[calc(13px*var(--card-scale))] font-bold text-[#1a1a1a] dark:text-white">EGP {item.afterOfferPrice.toLocaleString()}</p>
                  <p className="text-[calc(11px*var(--card-scale))] line-through font-thin text-[#1a1a1a] dark:text-white">EGP {item.price.toLocaleString()}</p>
                </section>
                {/* <div ">Deal</div> */}
                <p className="flex justify-center items-center bg-green-300 text-[rgb(0,150,0)] text-[calc(10px*var(--card-scale))] font-bold px-1 py-[2px] rounded-md">{100 - (Math.round((item.afterOfferPrice / item.price) * 100))}% OFF</p>
              </div>

              <div className="flex justify-center items-center gap-3">
                <p className="text-[calc(12px*var(--card-scale))] text-[#1a1a1a74] dark:text-[#e5e5e574]">{item.colors ? ("colors:") : ("skins")}</p>
                <section className="flex justify-center items-center gap-1">
                  {item.colors ? (
                    <div className="flex gap-[6px]">
                      {item.colors.map((color, ndx) => (
                        <span
                          key={ndx}
                          className={`w-4 h-4 rounded-full ${color} shadow-[0_0_2px_rgba(0,0,0,0.5)] dark:shadow-[0_0_2px_rgba(255,255,255,0.5)]`}
                        ></span>
                      ))}
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      {item.skins.map((skin, ndx) => (
                        <img
                          src={`${skin}`}
                          key={ndx}
                          className={`w-4 h-4 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.5)] dark:shadow-[0_0_2px_rgba(255,255,255,0.5)]`}
                        />
                      ))}
                    </div>
                  )}
                </section>
              </div>

              <div className="flex justify-between items-center w-full">
                <section className="flex items-center gap-1">
                  {[...Array(5)].map((_, ndx) => (
                    <span key={ndx}
                      className={ndx < item.stars ? "text-yellow-400" : "text-gray-400"}>
                      ★</span>
                  ))}
                </section>
                <p className="text-[calc(12px*var(--card-scale))] text-[#1a1a1a74] dark:text-[#e5e5e574]">{item.reviews} reviews</p>
              </div>

              <div className="flex items-center justify-evenly w-full absolute bottom-[calc(5px*var(--card-scale))] left-0">
                <button onClick={() => {
                  setStoreItems(prev =>
                    prev.map(storeItem =>
                      storeItem.id === item.id
                        ? { ...storeItem, inCart: true }
                        : storeItem
                    )
                  );
                }}
                  className={`flex justify-center items-center w-[75%] p-[2px] text-[calc(12px*var(--card-scale))] cursor-pointer transition-all duration-200 backdrop-blur-[10px] active:translate-y-[1px] text-white ${((!item.inCart)) ? ("hover:shadow-[0_0_7px_rgb(37,99,235)] dark:hover:shadow-[0_0_7px_rgb(0,170,255)] bg-blue-500 dark:hover:border-blue-500 hover:border-blue-600") : ("hover:shadow-[0_0_7px_rgb(37,235,99)] dark:hover:shadow-[0_0_7px_rgb(0,255,170)] bg-green-500 dark:hover:border-green-500 hover:border-green-600")} rounded-lg`}>
                  {(!item.inCart) ? ("Add to Cart") : ("✓ Added to Cart")}
                </button>

                <button
                  onClick={() => {
                    setStoreItems(prev =>
                      prev.map(storeItem =>
                        storeItem.id === item.id
                          ? { ...storeItem, favourite: !storeItem.favourite }
                          : storeItem
                      ));
                  }}
                  className="group flex items-center justify-center transition-all duration-200 py-[12px] bg-white dark:bg-[#1a1a1a] border border-[#1a1a1a] dark:border-white rounded-full hover:bg-[#1a1a1a] dark:hover:bg-white w-[15%] h-5">
                  {item.favourite ? ("❤️") : ("🤍")}
                </button>
              </div>
            </div>
          ))
        )}
        <span className={`w-4 h-4 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.5)] dark:shadow-[0_0_2px_rgba(255,255,255,0.5)]`}></span>
      </div>

      {/* <div className="absolute top-20 w-full h-1 bg-white"></div> */}
      {/* <button className="flex justify-center items-center w-[60%] p-1 cursor-pointer transition-all duration-200 backdrop-blur-[10px] active:translate-y-[1px] text-[#1a1a1a] dark:text-white dark:active:bg-[#2424247c] dark:bg-[#1a1a1a] active:bg-[#dbdbdb7c] bg-[#e6e9ee] hover:shadow-[0_0_7px_rgb(37,99,235)] dark:hover:shadow-[0_0_7px_rgb(0,170,255)] dark:hover:border-blue-500 hover:border-blue-600 border border-[#1a1a1a] dark:border-white rounded-lg">Manage Players</button> */}
    </div >
  );
}
