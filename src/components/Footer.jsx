import React, { useEffect, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMalumod } from "../readx/gig";

function Footer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(2);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [tracks, setTracks] = useState([]);
  const words = useSelector((state) => state.counter.words);
  const audioRef = useRef(null);
  useEffect(() => {
    try {
      const storedData = localStorage.getItem("data");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setTracks(Array.isArray(parsedData) ? parsedData : []);
      }
    } catch (error) {
      console.error(
        "Xatolik: localStorage ma'lumotlarini o'qishda muammo:",
        error
      );
      setTracks([]);
    }
  }, []);

  useEffect(() => {
    if (tracks.length > 0 && words && typeof words.index === "number") {
      const index = Math.min(Math.max(words.index, 0), tracks.length - 1);
      setCurrentTrack(tracks[index]);
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  }, [words, tracks]);

  useEffect(() => {
    if (tracks.length > 0) {
      const index = Math.min(Math.max(currentTrackIndex, 0), tracks.length - 1);
      setCurrentTrack(tracks[index]);
      setIsPlaying(true);
    }
  }, [currentTrackIndex, tracks]);

  useEffect(() => {
    const playAudio = async () => {
      if (isPlaying && audioRef.current && currentTrack) {
        console.log(audioRef.current);
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error("Audio playback error:", error);
          setIsPlaying(false);
        }
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isPlaying, currentTrack, currentTrackIndex]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleVolumeChange = useCallback((e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.currentTime >= audioRef.current.duration - 0.5) {
        handleNextTrack();
      }
    }
  };

  const handleNextTrack = useCallback(() => {
    if (tracks.length === 0) return;
    setIsPlaying(false);
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  }, [tracks.length]);

  const handlePreviousTrack = useCallback(() => {
    if (tracks.length === 0) return;
    setIsPlaying(false);
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
  }, [tracks.length]);

  const handleSeek = useCallback((e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }, []);
  console.log(currentTrack);
  if (!currentTrack) return null;
  return (
    <>
      <div className="relative z-20">
        <audio
          ref={audioRef}
          src={currentTrack.track.preview_url}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className="fixed bottom-0 h-20 w-full bg-[#181818] px-[15px] py-[10px] flex justify-between items-center">
          <div className="flex items-center gap-5">
            {!isModalOpen && (
              <img
                onClick={() => setIsModalOpen(true)}
                src={currentTrack?.track?.album.images[0].url}
                alt=""
                className="w-16 rounded-[5px] cursor-pointer"
              />
            )}
            <div>
              <p className="text-[17px] font-[700]">
                {currentTrack?.track?.name || "Play It Safe"}
              </p>
              <p className="text-[14px]">Julia Wolf</p>
            </div>
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
          </div>

          <div className="flex fixed right-[31%] flex-col justify-center items-center w-[40%]">
            <div className="flex gap-10">
              <button>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.4708 7.31952C21.0448 7.74555 21.0448 8.43627 21.4708 8.8623L22.1566 9.54813H19.8151C18.3733 9.54813 17.0016 10.215 16.0522 11.3776L7.94266 21.3076C7.37299 22.0052 6.55001 22.4053 5.68493 22.4053H5V24.5481H5.68493C7.12674 24.5481 8.49837 23.8813 9.44781 22.7187L17.5573 12.7887C18.127 12.0911 18.95 11.691 19.8151 11.691H22.4991L21.4708 12.7192C21.0448 13.1453 21.0448 13.836 21.4708 14.262C21.8968 14.688 22.5876 14.688 23.0136 14.262L26.1313 11.1443C26.3265 10.9491 26.3265 10.6325 26.1313 10.4372L23.0136 7.31952C22.5876 6.89349 21.8968 6.89349 21.4708 7.31952ZM6.36879 8.54813C7.76049 8.54813 9.08446 9.19407 10.0009 10.3202L12.4531 13.1728L11 14.5481L8.54806 11.687C7.9982 11.0113 7.20381 10.6238 6.36879 10.6238H5.00043V8.54813H6.36879ZM16.3284 20.7761C17.2449 21.9022 18.5688 22.5481 19.9605 22.5481H22.6419L21.4708 23.7192C21.0448 24.1453 21.0448 24.836 21.4708 25.262C21.8968 25.688 22.5876 25.688 23.0136 25.262L26.1313 22.1443C26.3265 21.9491 26.3265 21.6325 26.1313 21.4372L23.0136 18.3195C22.5876 17.8935 21.8968 17.8935 21.4708 18.3195C21.0448 18.7455 21.0448 19.4363 21.4708 19.8623L22.081 20.4725H19.9605C19.1255 20.4725 18.3311 20.0849 17.7813 19.4093L16 17.0481L14.5 18.5481L16.3284 20.7761Z"
                    fill="#BABABA"
                  />
                </svg>
              </button>
              <button onClick={handlePreviousTrack}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 7C7.44772 7 7 7.44772 7 8V24C7 24.5523 7.44772 25 8 25H10C10.5523 25 11 24.5523 11 24V18.1512L23.5 24.8738C24.1667 25.2323 25 24.7842 25 24.0671V7.9329C25 7.21582 24.1667 6.76765 23.5 7.12619L11 13.8488V8C11 7.44772 10.5523 7 10 7H8Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? (
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20ZM13 12C13 11.4477 13.4477 11 14 11H17C17.5523 11 18 11.4477 18 12V28C18 28.5523 17.5523 29 17 29H14C13.4477 29 13 28.5523 13 28V12ZM23 11C22.4477 11 22 11.4477 22 12V28C22 28.5523 22.4477 29 23 29H26C26.5523 29 27 28.5523 27 28V12C27 11.4477 26.5523 11 26 11H23Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46ZM17.95 14.2388L34.45 23.1126C35.1833 23.507 35.1833 24.493 34.45 24.8874L17.95 33.7612C17.2167 34.1556 16.3 33.6626 16.3 32.8738V15.1262C16.3 14.3374 17.2167 13.8444 17.95 14.2388Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
              <button onClick={handleNextTrack}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 7C24.5523 7 25 7.44772 25 8V24C25 24.5523 24.5523 25 24 25H22C21.4477 25 21 24.5523 21 24V18.1512L8.5 24.8738C7.83333 25.2323 7 24.7842 7 24.0671V7.9329C7 7.21582 7.83333 6.76765 8.5 7.12619L21 13.8488V8C21 7.44772 21.4477 7 22 7H24Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20H12V22H10C7.79086 22 6 20.2091 6 18V10C6 7.79086 7.79086 6 10 6H22C24.2091 6 26 7.79086 26 10V18C26 20.2091 24.2091 22 22 22H18.843L20.0141 23.1711C20.4401 23.5971 20.4401 24.2879 20.0141 24.7139C19.588 25.1399 18.8973 25.1399 18.4713 24.7139L15.3536 21.5962C15.1583 21.4009 15.1583 21.0843 15.3536 20.8891L18.4713 17.7714C18.8973 17.3454 19.588 17.3454 20.0141 17.7714C20.4401 18.1974 20.4401 18.8881 20.0141 19.3142L19.3282 20H22C23.1046 20 24 19.1046 24 18V10C24 8.89543 23.1046 8 22 8Z"
                    fill="#BABABA"
                  />
                </svg>
              </button>
            </div>
            <div className="flex w-full text-[14px] items-center gap-4 mt-2">
              <span>{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-[5px]"
              />
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex gap-3 items-center w-[220px] mr-5">
            <svg
              width="42"
              height="42"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 9H10C9.44772 9 9 9.44772 9 10V11C9 11.5523 9.44772 12 10 12H22C22.5523 12 23 11.5523 23 11V10C23 9.44772 22.5523 9 22 9ZM10 7C8.34315 7 7 8.34315 7 10V11C7 12.6569 8.34315 14 10 14H22C23.6569 14 25 12.6569 25 11V10C25 8.34315 23.6569 7 22 7H10ZM7 17H25V19.5H7V17ZM25 23H7V25.5H25V23Z"
                fill="white"
              />
            </svg>

            <svg
              width="42"
              height="42"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.2 9C7.53726 9 7 9.53892 7 10.2037V16.8398C7 17.5 7.5 18 8.2 18H11V20H8C5.74668 20 5 18.1677 5 15.9074V10.6111C5 8.61675 6.21177 7 8.2 7H11V9H8.2ZM24 9H16C15.4477 9 15 9.44772 15 10V23C15 23.5523 15.4477 24 16 24H24C24.5523 24 25 23.5523 25 23V10C25 9.44772 24.5523 9 24 9ZM16 7C14.3431 7 13 8.34315 13 10V23C13 24.6569 14.3431 26 16 26H24C25.6569 26 27 24.6569 27 23V10C27 8.34315 25.6569 7 24 7H16ZM20 22C21.6569 22 23 20.6569 23 19C23 17.3431 21.6569 16 20 16C18.3431 16 17 17.3431 17 19C17 20.6569 18.3431 22 20 22ZM21 13C21 13.5523 20.5523 14 20 14C19.4477 14 19 13.5523 19 13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13ZM11 23H8V25H11V23Z"
                fill="white"
              />
            </svg>

            <svg
              width="42"
              height="42"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.1385 9.74993L9.47894 13.6673C7.50702 14.8273 7.50702 17.679 9.47894 18.8389L16.1385 22.7563V9.74993ZM8.4649 11.9434C5.17837 13.8767 5.17837 18.6295 8.4649 20.5628L16.6314 25.3666C17.2981 25.7588 18.1385 25.2781 18.1385 24.5047V8.00152C18.1385 7.2281 17.2981 6.74745 16.6314 7.13958L8.4649 11.9434ZM19.1387 9.25317C20.1236 9.25317 21.0989 9.44717 22.0088 9.82408C22.9187 10.201 23.7455 10.7534 24.442 11.4499C25.1384 12.1463 25.6909 12.9731 26.0678 13.883C26.4447 14.793 26.6387 15.7683 26.6387 16.7532C26.6387 17.7381 26.4447 18.7134 26.0678 19.6233C25.6909 20.5332 25.1384 21.36 24.442 22.0565C23.7455 22.7529 22.9187 23.3054 22.0088 23.6823C21.0989 24.0592 20.1236 24.2532 19.1387 24.2532V22.2443C19.8598 22.2443 20.5738 22.1022 21.24 21.8263C21.9062 21.5503 22.5116 21.1459 23.0215 20.636C23.5314 20.1261 23.9358 19.5207 24.2118 18.8545C24.4877 18.1883 24.6298 17.4743 24.6298 16.7532C24.6298 16.0321 24.4877 15.318 24.2118 14.6518C23.9358 13.9856 23.5314 13.3803 23.0215 12.8704C22.5116 12.3605 21.9062 11.956 21.24 11.6801C20.5738 11.4041 19.8598 11.2621 19.1387 11.2621V9.25317ZM21.3311 14.5363C20.7997 13.8955 20.053 13.4431 19.213 13.2532L19.1387 20.2532C19.9826 20.079 20.7387 19.6408 21.2836 19.0101C21.8285 18.3795 22.1299 17.5936 22.1385 16.781C22.1471 15.9684 21.8625 15.177 21.3311 14.5363Z"
                fill="white"
              />
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-[90%] h-[4px]"
            />
          </div>
        </div>

        {isModalOpen && (
          <div className="w-[250px] py-2 h-auto  fixed bottom-[72px] flex flex-col items-end">
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-10 mb-[-40px] z-10"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle opacity="0.5" cx="15" cy="15" r="15" fill="black" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.1584 21.7543C14.8349 22.0935 14.3065 22.0797 13.9995 21.7239L6.25847 12.7521C5.88794 12.3227 5.91956 11.6596 6.32909 11.271C6.73863 10.8825 7.37101 10.9156 7.74154 11.3451L14.6362 19.336L22.2929 11.3071C22.6834 10.8976 23.3166 10.8976 23.7071 11.3071C24.0976 11.7166 24.0976 12.3806 23.7071 12.7901L15.1584 21.7543Z"
                  fill="white"
                />
              </svg>
            </button>
            <img
              className="w-[250px] h-auto"
              src={currentTrack?.track?.album.images[0].url}
              alt=""
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
