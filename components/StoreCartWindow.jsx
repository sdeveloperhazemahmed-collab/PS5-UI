import { useState } from "react";

export default function StoreCartWindow({ storeItems, setStoreItems, isConfirmedShipping, setIsConfirmedShipping }) {
  const CartItems = storeItems.filter(item => {
    const inCart = item.inCart === true;
    return inCart;
  });

  const allQuantitiesFilled = CartItems.every(
    item => item.quantity && item.quantity > 0
  );

  const allColorsSelected = CartItems.every(
    item => item.selectedColor
  );


  const [address, setAddress] = useState("");

  return (
    <div className="flex items-center justify-center text-[#1a1a1a] dark:text-white p-5 pt-4 pb-4 w-[797px] rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-[20px] absolute top-[68px] z-10">
      <div className="flex items-start justify-start gap-4 h-[calc(238px*var(--card-scale))] flex-wrap w-full overflow-x-auto scroll-smooth ps-scroll">
        {CartItems.length === 0 ? (
          <>
            <div className="group flex justify-start items-start transition-all duration-200 gap-[1px] p-[10px] rounded-xl w-full h-[100%] border border-transparent bg-[#e6e9ee] dark:bg-[#1a1a1a] hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0 relative">
              <p className="w-full h-[100%] flex items-center justify-center text-center text-[calc(14px*var(--card-scale))] text-[#1a1a1a74] dark:text-[#e5e5e574]">
                Your cart is empty 🛒
              </p>
            </div>
          </>
        ) : (
          CartItems.map((item) => (
            <div key={item.id} className="group flex flex-col justify-start items-start transition-all duration-200 gap-[1px] p-[10px] rounded-xl w-[calc(193px*var(--card-scale))] h-[100%] border border-transparent bg-[#e6e9ee] dark:bg-[#1a1a1a] hover:border-blue-600 dark:hover:border-blue-500 backdrop-blur-[5px] flex-shrink-0 relative">
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
                        ? { ...storeItem, inCart: false }
                        : storeItem
                    )
                  );
                }}
                  className="flex justify-center items-center w-[75%] p-[2px] text-[calc(12px*var(--card-scale))] cursor-pointer transition-all duration-200 backdrop-blur-[10px] active:translate-y-[1px] text-white hover:shadow-[0_0_7px_rgb(235,99,37)] dark:hover:shadow-[0_0_7px_rgb(255,170,0)] bg-red-500 dark:hover:border-red-500 hover:border-red-600 rounded-lg">
                  Remove from Cart</button>
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
      </div>

      <div className="group flex flex-col justify-start items-start transition-all duration-200 gap-[1px] p-[10px] rounded-xl w-[calc(270px*var(--card-scale))] h-[299px] backdrop-blur-[5px] relative">
        {CartItems.length === 0 ? (
          <p className="w-full h-[100%] flex items-center justify-center text-center text-[calc(14px*var(--card-scale))] text-[#1a1a1a74] dark:text-[#e5e5e574]">
            No items to show herr
          </p>
        ) : (
          <>
            <input type="text" className="pl-3 w-full h-10 rounded border bg-white/30 dark:bg-black/30 outline-none text-[14px]" placeholder="Address..." value={address} onChange={(e) => setAddress(e.target.value)} />
            <hr className="w-full h-[1px] bg-black mb-3" />
            <section className="flex flex-col items-start justify-start pb-6 gap-6 text-center w-full h-full text-[calc(14px*var(--card-scale))] text-[#1a1a1a74] dark:text-[#e5e5e574] overflow-x-auto scroll-smooth ps-scroll">
              {CartItems.map((item) => (
                <div className="flex flex-col justify-center items-start gap-2">
                  <div className="flex flex-col justify-center items-start w-full">
                    <p className="flex flex-col items-center justify-center text-center text-[calc(14px*var(--card-scale))] text-[#1a1a1a] dark:text-[#e5e5e5]">
                      {item.name}
                    </p>
                    <hr className="w-full h-[1px] bg-[#1a1a1a74]" />
                  </div>
                  <form className="flex flex-col justify-center items-start gap-1">
                    <div className="flex justify-center items-center gap-2">
                      <label className="text-[#1a1a1a74] dark:text-[#e5e5e574] text-[calc(12px*var(--card-scale))]">Quantity:</label>
                      <input
                        type="number"
                        placeholder="Insert Quantity..."
                        className="pl-3 w-full rounded border bg-white/30 dark:bg-black/30 outline-none text-[14px]"
                        min={1}
                        required
                        value={item.quantity || ""}
                        onChange={(e) => {
                          const value = e.target.value;
                          setStoreItems(prev =>
                            prev.map(storeItem =>
                              storeItem.id === item.id
                                ? { ...storeItem, quantity: value }
                                : storeItem
                            )
                          );
                        }}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-2 w-full">
                      <label className="text-[#1a1a1a74] dark:text-[#e5e5e574] text-[calc(12px*var(--card-scale))]">Pick a Color:</label>
                      <section className="flex justify-start items-center w-full gap-2 ml-1">
                        {item.colors.map((color, ndx) => (
                          <label key={ndx} className="relative cursor-pointer">
                            <input
                              type="radio"
                              name={`color-${item.id}`}
                              value={color}
                              disabled={isConfirmedShipping}
                              checked={item.selectedColor === color}
                              onChange={() => {
                                setStoreItems(prev =>
                                  prev.map(storeItem =>
                                    storeItem.id === item.id
                                      ? { ...storeItem, selectedColor: color }
                                      : storeItem
                                  )
                                );
                              }}
                              className="hidden"
                            />

                            <span
                              className={`
                                w-5 h-5 rounded-full block
                                ${color}
                                shadow-[0_0_2px_rgba(0,0,0,0.5)]
                                dark:shadow-[0_0_2px_rgba(255,255,255,0.5)]
                                ${item.selectedColor === color
                                  ? "ring-2 ring-blue-500"
                                  : "hover:opacity-100"}
                              `}
                            />
                          </label>
                        ))}
                      </section>

                    </div>
                  </form>
                </div>
              ))}
            </section>
          </>
        )}
        <button
          onClick={() => {
            if (
              address.trim() === "" ||
              !allQuantitiesFilled ||
              !allColorsSelected
            ) return;

            setIsConfirmedShipping(true);
          }}
          disabled={
            address.trim() === "" ||
            !allQuantitiesFilled ||
            !allColorsSelected
          }
          className={`
            flex justify-center items-center w-full p-[2px]
            text-[calc(12px*var(--card-scale))]
            transition-all duration-200
            backdrop-blur-[10px] active:translate-y-[1px]
            text-white rounded-lg
            ${isConfirmedShipping
              ? "bg-green-500 cursor-not-allowed"
              : address.trim() === "" ||
                !allQuantitiesFilled ||
                !allColorsSelected
                ? "bg-gray-400 cursor-not-allowed active:translate-y-0"
                : "bg-blue-500 hover:shadow-[0_0_7px_rgb(37,99,235)]"
            }
          `}
        >
          {isConfirmedShipping ? "✓ Shipping Confirmed" : "Confirm Shipping"}
        </button>
      </div>
    </div>
  );
}
