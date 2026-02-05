export default function NavButtons({ showPlayersBox, setShowPlayersBox, logIn, setLogIn, showNotificationBox, setShowNotificationBox, showUserInterestsBox, setShowUserInterestsBox, showPlay2Win, setShowPlay2Win, showStoreBox, setShowStoreBox, darkMode }) {
  return (
    <div className="flex flex-row-reverse justify-around w-full">
      <button className="btn1 transition-all duration-200 p-2 rounded-lg bg-transparent border border-transparent hover:border-[#1a1a1a] dark:hover:border-white"
        onClick={() => {
          if (showPlayersBox) { setShowPlayersBox(false); return; }
          if (showNotificationBox) setShowNotificationBox(false);
          if (showUserInterestsBox) setShowUserInterestsBox(false);
          if (showPlay2Win) setShowPlay2Win(false);
          if (showStoreBox) setShowStoreBox(false);
          if (logIn) setLogIn(false);
          setShowPlayersBox(true);
        }}
      >
        <svg
          className="w-8"
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M11 8L12.5 6.5V10.5" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path
              d="M19 5L19.9486 5.31621C20.9387 5.64623 21.4337 5.81124 21.7168 6.20408C22 6.59692 22 7.11873 21.9999 8.16234L21.9999 8.23487C21.9999 9.09561 21.9999 9.52598 21.7927 9.87809C21.5855 10.2302 21.2093 10.4392 20.4569 10.8572L17.5 12.5"
              stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5"></path>
            <path
              d="M4.99994 5L4.05132 5.31621C3.06126 5.64623 2.56623 5.81124 2.2831 6.20408C1.99996 6.59692 1.99997 7.11873 2 8.16234L2 8.23487C2.00003 9.09561 2.00004 9.52598 2.20723 9.87809C2.41441 10.2302 2.79063 10.4392 3.54305 10.8572L6.49994 12.5"
              stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5"></path>
            <path d="M12 16V19" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path>
            <path
              d="M15.5 22H8.5L8.83922 20.3039C8.93271 19.8365 9.34312 19.5 9.8198 19.5H14.1802C14.6569 19.5 15.0673 19.8365 15.1608 20.3039L15.5 22Z"
              stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M18 22H6" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path>
            <path
              d="M17 2.45597C17.7415 2.59747 18.1811 2.75299 18.5609 3.22083C19.0367 3.80673 19.0115 4.43998 18.9612 5.70647C18.7805 10.2595 17.7601 16 12.0002 16C6.24021 16 5.21983 10.2595 5.03907 5.70647C4.98879 4.43998 4.96365 3.80673 5.43937 3.22083C5.91508 2.63494 6.48445 2.53887 7.62318 2.34674C8.74724 2.15709 10.2166 2 12.0002 2C12.7184 2 13.3857 2.02548 14 2.06829"
              stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path>
          </g>
        </svg>
      </button>

      <button className="btn2 transition-all duration-200 p-2 rounded-lg bg-transparent border border-transparent hover:border-[#1a1a1a] dark:hover:border-white"
        onClick={() => {
          if (showNotificationBox) { setShowNotificationBox(false); return; }
          if (showUserInterestsBox) setShowUserInterestsBox(false);
          if (showPlayersBox) setShowPlayersBox(false);
          if (showPlay2Win) setShowPlay2Win(false);
          if (showStoreBox) setShowStoreBox(false);
          if (logIn) setLogIn(false);
          setShowNotificationBox(true);
        }}
      >
        {showNotificationBox ? (
          <svg
            className="w-8"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M7 14H16"
                stroke={darkMode ? "white" : "#1a1a1a"}
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M7 17.5H13"
                stroke={darkMode ? "white" : "#1a1a1a"}
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M22 2L17 6.99998M17 1.99998L22 6.99996"
                stroke={darkMode ? "white" : "#1a1a1a"}
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12V10.5M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8"
                stroke={darkMode ? "white" : "#1a1a1a"}
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        ) : (
          <svg
            className="w-8"
            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle
                cx="19"
                cy="5"
                r="3"
                stroke={darkMode ? "white" : "#1a1a1a"}
                stroke-width="1.5"
              ></circle>{" "}
              <path
                d="M7 14H16"
                stroke={darkMode ? "white" : "#1a1a1a"}
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M7 17.5H13"
                stroke={darkMode ? "white" : "#1a1a1a"}
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
              <path
                d="M2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12V10.5M13.5 2H12C7.28595 2 4.92893 2 3.46447 3.46447C2.49073 4.43821 2.16444 5.80655 2.0551 8"
                stroke={darkMode ? "white" : "#1a1a1a"}
                stroke-width="1.5"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
        )}
      </button>

      <button className="btn3 transition-all duration-200 p-2 rounded-lg bg-transparent border border-transparent hover:border-[#1a1a1a] dark:hover:border-white"
        onClick={() => {
          if (showUserInterestsBox) { setShowUserInterestsBox(false); return; }
          if (showNotificationBox) setShowNotificationBox(false);
          if (showPlayersBox) setShowPlayersBox(false);
          if (showPlay2Win) setShowPlay2Win(false);
          if (showStoreBox) setShowStoreBox(false);
          if (logIn) setLogIn(false);
          setShowUserInterestsBox(true);
        }}
      >
        <svg
          className="w-8"
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838"
              stroke={darkMode ? "white" : "#1a1a1a"}
              stroke-width="1.5"
              stroke-linecap="round"
            ></path>{" "}
          </g>
        </svg>
      </button>

      <button className="btn4 transition-all duration-200 p-2 rounded-lg bg-transparent border border-transparent hover:border-[#1a1a1a] dark:hover:border-white"
        onClick={() => {
          if (showPlay2Win) { setShowPlay2Win(false); return; }
          if (showUserInterestsBox) setShowUserInterestsBox(false);
          if (showNotificationBox) setShowNotificationBox(false);
          if (showPlayersBox) setShowPlayersBox(false);
          if (showStoreBox) setShowStoreBox(false);
          if (logIn) setLogIn(false);
          setShowPlay2Win(true);
        }}
      >
        <svg
          className="w-8"
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.714 21 19.0711 19.682 20.5355C18.364 22 16.2426 22 12 22C7.75736 22 5.63604 22 4.31802 20.5355C3 19.0711 3 16.714 3 12C3 7.28595 3 4.92893 4.31802 3.46447C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.46447C20.5583 4.43821 20.852 5.80655 20.9504 8" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path> <path d="M8.11177 9.94889C7.59413 9.81019 7.18981 9.40587 7.05111 8.88823C7 8.69748 7 8.46499 7 8C7 7.53501 7 7.30252 7.05111 7.11177C7.18981 6.59413 7.59413 6.18981 8.11177 6.05111C8.30252 6 8.53501 6 9 6H15C15.465 6 15.6975 6 15.8882 6.05111C16.4059 6.18981 16.8102 6.59413 16.9489 7.11177C17 7.30252 17 7.53501 17 8C17 8.46499 17 8.69748 16.9489 8.88823C16.8102 9.40587 16.4059 9.81019 15.8882 9.94889C15.6975 10 15.465 10 15 10H12" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path> <path d="M8.5 14V17M7 15.5L10 15.5" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.3333 13.8333C16.3333 14.2936 15.9602 14.6667 15.5 14.6667C15.0398 14.6667 14.6667 14.2936 14.6667 13.8333C14.6667 13.3731 15.0398 13 15.5 13C15.9602 13 16.3333 13.3731 16.3333 13.8333Z" fill={darkMode ? "white" : "#1a1a1a"}></path> <path d="M16.3333 17.1667C16.3333 17.6269 15.9602 18 15.5 18C15.0398 18 14.6667 17.6269 14.6667 17.1667C14.6667 16.7064 15.0398 16.3333 15.5 16.3333C15.9602 16.3333 16.3333 16.7064 16.3333 17.1667Z" fill={darkMode ? "white" : "#1a1a1a"}></path> <path d="M14.6667 15.5C14.6667 15.9602 14.2936 16.3333 13.8333 16.3333C13.3731 16.3333 13 15.9602 13 15.5C13 15.0398 13.3731 14.6667 13.8333 14.6667C14.2936 14.6667 14.6667 15.0398 14.6667 15.5Z" fill={darkMode ? "white" : "#1a1a1a"}></path> <path d="M18 15.5C18 15.9602 17.6269 16.3333 17.1667 16.3333C16.7064 16.3333 16.3333 15.9602 16.3333 15.5C16.3333 15.0398 16.7064 14.6667 17.1667 14.6667C17.6269 14.6667 18 15.0398 18 15.5Z" fill={darkMode ? "white" : "#1a1a1a"}></path> </g></svg>
      </button>

      <button className="btn5 transition-all duration-200 p-2 rounded-lg bg-transparent border border-transparent hover:border-[#1a1a1a] dark:hover:border-white"
        onClick={() => {
          if (showStoreBox) { setShowStoreBox(false); return; }
          if (showUserInterestsBox) setShowUserInterestsBox(false);
          if (showNotificationBox) setShowNotificationBox(false);
          if (showPlayersBox) setShowPlayersBox(false);
          if (showPlay2Win) setShowPlay2Win(false);
          if (logIn) setLogIn(false);
          setShowStoreBox(true);
        }}
      >
        <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path> <path d="M21 22H9M3 22H5.5" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path> <path d="M19 22V15" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path> <path d="M5 22V15" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round"></path> <path d="M11.9999 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2H16" stroke={darkMode ? "white" : "#1a1a1a"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>

      <button className="btn6"
        onClick={() => {
          if (showUserInterestsBox) setShowUserInterestsBox(false);
          if (showUserInterestsBox) setShowUserInterestsBox(false);
          if (showNotificationBox) setShowNotificationBox(false);
          if (showPlayersBox) setShowPlayersBox(false);
          if (showStoreBox) setShowStoreBox(false);
          if (showPlay2Win) setShowPlay2Win(false);
          if (logIn) setLogIn(false);
        }}
      >
        <svg
          className={`w-8 ${showUserInterestsBox || showPlay2Win || showNotificationBox || showPlayersBox || logIn || showStoreBox ? "cursor-pointer" : "cursor-default"} `}
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
              stroke={
                showUserInterestsBox || showPlay2Win || showNotificationBox || showPlayersBox || logIn || showStoreBox
                  ? (darkMode ? "white" : "#1a1a1a")
                  : "none"
              }
              strokeWidth="1.5"
              strokeLinecap="round"
            >
            </path>
            <path d="M15 18H9" stroke={
              showUserInterestsBox || showPlay2Win || showNotificationBox || showPlayersBox || logIn || showStoreBox
                ? (darkMode ? "white" : "#1a1a1a")
                : "none"
            }
              strokeWidth="1.5"
              strokeLinecap="round"></path>
          </g>
        </svg>
      </button>
    </div>
  );
}