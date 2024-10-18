import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-[#000] flex flex-col min-w-[250px]  h-[100vh] px-[30px] fixed left-0 top-0 bottom-0">
      <div className="flex flex-col font-[500] tracking-[.5px] text-[16px] text-[#ffffffac] mt-[50px]">
        <NavLink to="/">
        <button className="flex items-center gap-[20px] py-[8px] button-1">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M29 29C29 29.5523 28.5523 30 28 30H20.2778C19.7255 30 19.2778 29.5523 19.2778 29V21.0526C19.2778 20.5003 18.8301 20.0526 18.2778 20.0526H14.7222C14.1699 20.0526 13.7222 20.5003 13.7222 21.0526V29C13.7222 29.5523 13.2745 30 12.7222 30H5C4.44772 30 4 29.5523 4 29V9.89769C4 9.54272 4.18817 9.21436 4.49443 9.0349L15.9962 2.29524C16.3075 2.11283 16.6929 2.11225 17.0047 2.29373L28.503 8.98543C28.8107 9.16451 29 9.49369 29 9.84972V29Z" />
          </svg>
          Home
        </button>
        </NavLink>
        <button className="flex items-center gap-[20px] py-[8px] button-1">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7747 22.3561L29.5924 28.4934C30.1511 29.0828 30.1332 30.0268 29.5524 30.5933C28.9808 31.1511 28.078 31.1329 27.5282 30.5526L21.7061 24.4083C19.7272 25.93 17.4956 26.7673 15.0114 26.9203C13.3514 27.0226 11.7438 26.792 10.1886 26.2288C8.63335 25.6655 7.2766 24.8625 6.11833 23.8199C4.96006 22.7772 4.01249 21.5057 3.27561 20.0055C2.53874 18.5053 2.12096 16.9125 2.02229 15.2271C1.92361 13.5418 2.15262 11.9092 2.70933 10.3292C3.26604 8.74932 4.05852 7.37069 5.08678 6.19334C6.11504 5.01599 7.36839 4.05225 8.84685 3.30212C10.3253 2.55198 11.8945 2.1258 13.5543 2.02356C15.2142 1.92132 16.8218 2.15183 18.3771 2.7151C19.9324 3.27837 21.2892 4.08134 22.4474 5.12402C23.6055 6.16669 24.5531 7.43815 25.2901 8.93838C26.027 10.4386 26.4448 12.0314 26.5434 13.7168C26.606 14.7861 26.5356 15.8403 26.3321 16.8793C26.1287 17.9184 25.8096 18.8946 25.3747 19.8079C24.9399 20.7212 24.4066 21.5706 23.7747 22.3561ZM14.84 23.9912C16.1107 23.9129 17.3094 23.5854 18.436 23.0085C19.5626 22.4317 20.519 21.6933 21.305 20.7934C22.091 19.8934 22.6986 18.8412 23.1279 17.6365C23.5572 16.4319 23.7341 15.1845 23.6586 13.8944C23.5831 12.6042 23.262 11.3875 22.6953 10.2442C22.1286 9.10096 21.4026 8.13081 20.5173 7.33378C19.632 6.53674 18.5964 5.92105 17.4106 5.48669C16.2247 5.05232 14.9965 4.87428 13.7258 4.95255C12.4551 5.03081 11.2565 5.35835 10.1298 5.93514C9.00317 6.51194 8.04682 7.25035 7.26078 8.15038C6.47473 9.0504 5.86709 10.1027 5.43783 11.3072C5.00858 12.5117 4.83171 13.7591 4.90721 15.0494C4.98272 16.3396 5.3038 17.5563 5.87045 18.6995C6.4371 19.8427 7.16312 20.8128 8.04853 21.6099C8.93394 22.407 9.96951 23.0227 11.1552 23.457C12.341 23.8913 13.5692 24.0694 14.84 23.9912Z"
              fill="#ffffffac"
            />
          </svg>
          Search
        </button>
        <button className="flex items-center gap-[20px] py-[8px] button-1">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="3" width="3" height="26" rx="1.5" fill="#ffffffac" />
            <rect
              x="11"
              y="3"
              width="3"
              height="26"
              rx="1.5"
              fill="#ffffffac"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.5 6.67524V26.5191H26.5V9.76681L21.5 6.67524ZM20.5288 3.1517C19.8627 2.73984 19 3.21512 19 3.99394V28.0076C19 28.5557 19.4477 29 20 29H28C28.5523 29 29 28.5557 29 28.0076V8.94045C29 8.59781 28.8219 8.2794 28.5288 8.09821L20.5288 3.1517Z"
              fill="#ffffffac"
            />
          </svg>
          Your Library
        </button>
      </div>
      <div className="flex flex-col font-[500] tracking-[.5px] text-[16px] text-[#ffffffac] mt-[30px]">
        <NavLink to="/playlist">
          <button className="flex items-center gap-[20px] py-[8px] button-1">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 0C0.895431 0 0 0.895431 0 2V30C0 31.1046 0.895431 32 2 32H30C31.1046 32 32 31.1046 32 30V2C32 0.895431 31.1046 0 30 0H2ZM15 9H17V15H23V17H17V23H15V17H9V15H15V9Z"
                fill="#ffffffac"
              />
            </svg>
            Create Playlist
          </button>
        </NavLink>
        <NavLink to="/layki">
          <button className="flex items-center gap-[20px] py-[8px] button-1">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="35px"
                height="35px"
                rx="2"
                fill="url(#paint0_linear_124_3039)"
              />
              <path
                d="M16.0006 10.158C17.6448 8.56071 20.1858 8.61373 21.7699 10.3307C23.3532 12.0484 23.4078 14.784 21.9351 16.5684L15.9992 23L10.0647 16.5684C8.59191 14.784 8.64721 12.0439 10.2299 10.3307C11.8154 8.616 14.3514 8.55844 16.0006 10.158Z"
                fill="#ffffffac"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_124_3039"
                  x1="1"
                  y1="1"
                  x2="25px"
                  y2="30.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3822EA" />
                  <stop offset="1" stopColor="#C7E9D7" />
                </linearGradient>
              </defs>
            </svg>
            Liked Songs
          </button>
        </NavLink>
      </div>
      <div className=" border-[#ffffffab] border-b-[1px] py-[5px]"></div>
      <div className="text-[#fff] mt-2 overflow-y-auto max-h-20%">
        <p>Chill Mix</p>
        <p>Insta Hits</p>
        <p>Your Top Songs 2021</p>
        <p>Mellow Songs</p>
        <p>Anime Lofi & Chillhop</p>
        <p>BG Afro “Select” Vibes</p>
        <p>Happy Hits!</p>
        <p>OST Compilations</p>
        <p>OST Compilations</p>
        <p>Nostalgia for old </p>
        <p>Mixed Feelings</p>
      </div>
    </div>
  );
}

export default Navbar;
