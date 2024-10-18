import React, { useEffect, useState } from "react";
import img1 from "../images/img/img3.png";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setWords } from "../readx/counterSlice";
function Layki() {
  const [Datas, setDatas] = useState();
  const token = localStorage.getItem("access_token");
  const musicList = useSelector((state) => state.counter3.musicList);
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  console.log(currentPath);
  useEffect(() => {
    setDatas(musicList);
  }, [musicList]);
  const getPlaylists = async () => {
    try {
      let response = await fetch("https://api.spotify.com/v1/playlists/", {
        headers: {
          Authorization: token,
        },
      });
      let { playlists } = await response.json();
      renderPlaylists(playlists.items);
    } catch (err) {
      console.log(err);
    }
  };
  getPlaylists();
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  function MalumodJonatish(datas, index) {
    console.log("salom");
    localStorage.setItem("data", JSON.stringify(Datas));
    let datast = datas.track.id;
    dispatch(setWords({ datast, index }));
  }
  return (
    <div>
      <div
        style={{ background: "linear-gradient(to bottom, #604ec1, #382f68)" }}
        className="pb-[20px]"
      >
        <div className=" py-[13px] flex gap-5 px-[21px] bg-[#ffffff09]">
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
              <path
                fillPule="evenodd"
                clipPule="evenodd"
                d="M12.5426 19.302C12.1382 19.7064 12.1547 20.3669 12.5788 20.7506L23.2737 30.4269C23.7856 30.8901 24.5761 30.8506 25.0392 30.3386C25.5024 29.8267 25.4629 29.0362 24.951 28.5731L15.4254 19.9547L24.9962 10.3839C25.4843 9.89573 25.4843 9.10427 24.9962 8.61612C24.508 8.12796 23.7166 8.12796 23.2284 8.61612L12.5426 19.302Z"
                fill="white"
              />
            </svg>
          </button>
          <button>
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
              <path
                fillPule="evenodd"
                clipPule="evenodd"
                d="M27.0702 19.302C27.4745 19.7064 27.458 20.3669 27.034 20.7506L16.3391 30.4269C15.8272 30.8901 15.0367 30.8506 14.5735 30.3386C14.1103 29.8267 14.1499 29.0362 14.6618 28.5731L24.1874 19.9547L14.6166 10.3839C14.1284 9.89573 14.1284 9.10427 14.6166 8.61612C15.1047 8.12796 15.8962 8.12796 16.3843 8.61612L27.0702 19.302Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <div className="flex pt-5 px-[21px] items-end gap-8">
          <div>
            <img className="max-w-[230px] max-h-[230px]" src={img1} alt="" />
          </div>
          <div className="font-[500] text-[16px] text-[#fff]">
            <p>PUBLIC</p>
            <p>PLAYLIST</p>
            <h2 className="text-[80px] font-[800]">Liked Songs</h2>
          </div>
        </div>
      </div>
      <div className="bg-[#2a2548] max-h-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button>
              <svg
                width="80"
                height="80"
                viewBox="0 0 104 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_416_1845)">
                  <circle cx="52" cy="48" r="36" fill="#65D36E" />
                  <path
                    d="M65.2866 48.5123C66.1519 48.0266 66.1519 46.8122 65.2866 46.3264L45.8179 35.3968C44.9526 34.911 43.871 35.5182 43.871 36.4898V58.349C43.871 59.3205 44.9526 59.9277 45.8179 59.442L65.2866 48.5123Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_416_1845"
                    x="0"
                    y="0"
                    width="104"
                    height="104"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_416_1845"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_416_1845"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
            <button>
              <svg
                width="40"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_416_1849)">
                  <path
                    d="M26.0023 12.9237L25.1506 12.132C21.0545 8.32467 14.7686 8.45914 10.826 12.545C6.87682 16.6417 6.7286 23.2093 10.3911 27.4886L25.9978 43.6979L41.6083 27.4885C45.2702 23.2099 45.1251 16.6539 41.1727 12.5444L26.0023 12.9237ZM26.0023 12.9237L26.8533 12.1314M26.0023 12.9237L26.8533 12.1314M26.8533 12.1314C30.9367 8.32997 37.2348 8.45444 41.1723 12.544L26.8533 12.1314Z"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_416_1849">
                    <rect width="52" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button>
              <svg
                width="40"
                height="40"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_416_1851)">
                  <circle
                    cx="26"
                    cy="26"
                    r="17.75"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                  <path
                    fillPule="evenodd"
                    clipPule="evenodd"
                    d="M34.8387 28.9289L26.8838 36.8839C26.3956 37.372 25.6042 37.372 25.116 36.8839L17.161 28.9289C16.6729 28.4408 16.6729 27.6493 17.161 27.1612C17.6492 26.673 18.4407 26.673 18.9288 27.1612L24.7499 32.9822L24.7499 17C24.7499 16.3096 25.3095 15.75 25.9999 15.75C26.6902 15.75 27.2499 16.3096 27.2499 17L27.2499 32.9822L33.071 27.1612C33.5591 26.673 34.3506 26.673 34.8387 27.1612C35.3269 27.6493 35.3269 28.4408 34.8387 28.9289Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_416_1851">
                    <rect width="52" height="52" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button>
              <svg
                width="30"
                height="30"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_416_1850)">
                  <path
                    fillPule="evenodd"
                    clipPule="evenodd"
                    d="M12.5714 22C12.5714 23.7358 11.1643 25.1429 9.4285 25.1429C7.69275 25.1429 6.28564 23.7358 6.28564 22C6.28564 20.2643 7.69275 18.8572 9.4285 18.8572C11.1643 18.8572 12.5714 20.2643 12.5714 22ZM25.1428 22C25.1428 23.7358 23.7357 25.1429 21.9999 25.1429C20.2642 25.1429 18.8571 23.7358 18.8571 22C18.8571 20.2643 20.2642 18.8572 21.9999 18.8572C23.7357 18.8572 25.1428 20.2643 25.1428 22ZM34.5714 25.1429C36.3071 25.1429 37.7142 23.7358 37.7142 22C37.7142 20.2643 36.3071 18.8572 34.5714 18.8572C32.8356 18.8572 31.4285 20.2643 31.4285 22C31.4285 23.7358 32.8356 25.1429 34.5714 25.1429Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_416_1850">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="flex">
            <button>
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0881 16.0684L21.2696 20.4797C21.6711 20.9033 21.6582 21.5818 21.2408 21.989C20.8299 22.3898 20.1811 22.3768 19.7859 21.9596L15.6013 17.5434C14.1789 18.6372 12.5749 19.239 10.7894 19.349C9.59632 19.4225 8.44086 19.2568 7.32304 18.8519C6.20522 18.4471 5.23006 17.8699 4.39755 17.1205C3.56504 16.3711 2.88397 15.4572 2.35435 14.379C1.82472 13.3007 1.52444 12.1558 1.45352 10.9445C1.38259 9.73316 1.5472 8.55971 1.94733 7.42414C2.34746 6.28858 2.91706 5.29768 3.65612 4.45146C4.39518 3.60524 5.29603 2.91255 6.35867 2.3734C7.42131 1.83424 8.54915 1.52792 9.74218 1.45443C10.9352 1.38095 12.0907 1.54663 13.2085 1.95148C14.3264 2.35633 15.3016 2.93346 16.134 3.68289C16.9665 4.43231 17.6475 5.34617 18.1772 6.42446C18.7069 7.50276 19.0072 8.64758 19.0781 9.85892C19.1231 10.6275 19.0724 11.3852 18.9262 12.132C18.78 12.8788 18.5506 13.5805 18.2381 14.2369C17.9255 14.8934 17.5422 15.5039 17.0881 16.0684ZM10.6663 17.2437C11.5796 17.1874 12.4411 16.952 13.2509 16.5374C14.0606 16.1228 14.748 15.5921 15.3129 14.9452C15.8779 14.2984 16.3146 13.5421 16.6232 12.6763C16.9317 11.8104 17.0589 10.9139 17.0046 9.98658C16.9504 9.05929 16.7196 8.18477 16.3122 7.36305C15.9049 6.54132 15.3831 5.84402 14.7468 5.27115C14.1105 4.69828 13.3662 4.25575 12.5138 3.94356C11.6615 3.63136 10.7787 3.50339 9.86543 3.55964C8.95212 3.6159 8.09058 3.85131 7.2808 4.26588C6.47103 4.68046 5.78365 5.21119 5.21868 5.85808C4.65372 6.50498 4.21697 7.2613 3.90844 8.12706C3.59992 8.99281 3.47279 9.88937 3.52706 10.8167C3.58133 11.7441 3.81211 12.6186 4.21938 13.4403C4.62666 14.2619 5.1485 14.9592 5.78488 15.5321C6.42127 16.105 7.16558 16.5475 8.01783 16.8597C8.87007 17.1719 9.75288 17.2999 10.6663 17.2437Z"
                  fill="white"
                />
              </svg>
            </button>
            <select className="select bg-[#ffffff00] w-full max-w-xs">
              <option disabled>Custom order</option>
              <option>Homer</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>
        </div>
        <div className="px-[25px]">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="div-2 font-[500] w-full text-[#b3b3b3]">
                  <th className="text-[22px] flex gap-5">
                    #<p className="text-[16px] font-[500]">TITLE</p>
                  </th>
                  <th className="font-[500] text-[16px]">ALBUM</th>
                  <th className="font-[500] text-[16px]">DATE ADDED</th>
                  <th className="flex justify-end">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_5756_336)">
                        <path
                          fillPule="evenodd"
                          clipPule="evenodd"
                          d="M23 14C23 18.9706 18.9706 23 14 23C9.02944 23 5 18.9706 5 14C5 9.02944 9.02944 5 14 5C18.9706 5 23 9.02944 23 14ZM25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14ZM14.5 8.5H12.5V15.5H18V13.5H14.5V8.5Z"
                          fill="#B3B3B3"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5756_336">
                          <rect width="28" height="28" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Datas &&
                  Datas.map((e, index) => (
                    <tr key={index} className="div-2 w-full">
                      <td className="flex items-center gap-3 ">
                        <p className="font-[600] text-[20px]">{index+1}</p>
                        {/* <p className="font-[600] text-[20px]">
                          {Datas?.track?.id == e.track.id
                            ? "salom"
                            : index + 1}
                        </p> */}
                        <img
                          onClick={() => {
                            MalumodJonatish(e, index);
                          }}
                          className="ml-2 w-[55px] rounded-[7px]"
                          src={e?.track?.album?.images[0]?.url}
                          alt=""
                        />
                        <div>
                          <p className="font-[600] text-[18px] text-[#fff]">
                            {e.track.name}
                          </p>
                          <p className="text-[15px]">Julia Wolf</p>
                        </div>
                      </td>
                      <td className="text-[18px]">Play It Safe</td>
                      <td></td>
                      <td className="text-[#fff] flex justify-end  font-[400] text-[18px] gap-10">
                        <button
                          className="z-20 button w-20 relative"
                          // onClick={() => {
                          //   layki(e);
                          // }}
                        >
                          <svg
                            width="20"
                            height="21"
                            viewBox="0 0 22 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.0009 2.03963C13.4673 -0.25648 17.2787 -0.18027 19.6548 2.28786C22.0299 4.75708 22.1118 8.68955 19.9026 11.2546L10.9988 20.5L2.09703 11.2546C-0.112132 8.68955 -0.0291836 4.75055 2.34482 2.28786C4.72303 -0.177004 8.52711 -0.259747 11.0009 2.03963Z"
                              fill="#63CF6C"
                            />
                          </svg>
                        </button>
                        {formatTime(e.track.duration_ms / 600)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layki;
