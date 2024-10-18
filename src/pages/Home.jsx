import React, { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance"; // Yaratilgan instance'ni import qilamiz
import { useNavigate } from "react-router-dom";

function Home() {
  const [kopKorilganlari, setKopKorilganlaro] = useState([]);
  const [malumodlar, setMalumod] = useState();
  const [miqdor1, setMiqdor1] = useState(3);
  const [miqdor2, setMiqdor2] = useState(3);
  const [miqdor3, setMiqdor3] = useState(3);
  const [miqdor4, setMiqdor4] = useState(3);
  const [miqdor5, setMiqdor5] = useState(3);
  const [miqdor6, setMiqdor6] = useState(6);
  const navigate = useNavigate();
  useEffect(() => {
    const getSpotifyPlaylists = async () => {
      try {
        const response = await axiosInstance.get("browse/featured-playlists");
        const response1 = await axiosInstance.get(
          "browse/categories/toplists/playlists"
        );
        const response2 = await axiosInstance.get(
          "browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists"
        );
        const response3 = await axiosInstance.get(
          "browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists"
        );
        const response4 = await axiosInstance.get(
          "browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists"
        );
        const response5 = await axiosInstance.get(
          "browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists"
        );
        setKopKorilganlaro(response.data.playlists.items);
        setMalumod({
          malumod1: response1,
          malumod2: response2,
          malumod3: response3,
          malumod4: response4,
          malumod5: response5,
        });
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };
    getSpotifyPlaylists();
  }, []);
  console.log(malumodlar);
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  function sozlarniKesish(text) {
    return text.split(" ").slice(0, 5).join(" ") + "...";
  }
  function malumodJonatish(e) {
    localStorage.setItem("malumod", JSON.stringify(e));
    navigate("/playlist");
  }
  function miqdorlar1() {
    if (miqdor1 == 3) {
      setMiqdor1(100);
    } else {
      setMiqdor1(3);
    }
  }
  function miqdorlar2() {
    if (miqdor2 == 3) {
      setMiqdor2(100);
    } else {
      setMiqdor2(3);
    }
  }
  function miqdorlar3() {
    if (miqdor3 == 3) {
      setMiqdor3(100);
    } else {
      setMiqdor3(3);
    }
  }
  function miqdorlar4() {
    if (miqdor4 == 3) {
      setMiqdor4(100);
    } else {
      setMiqdor4(3);
    }
  }
  function miqdorlar5() {
    if (miqdor5 == 3) {
      setMiqdor5(100);
    } else {
      setMiqdor5(3);
    }
  }
  function qoshish(e) {
    if (miqdor6 <= 0) {
      setMiqdor6(18);
    }
    if (miqdor6 >= 18) {
      setMiqdor6(6);
    } else if (e == 5) {
      setMiqdor6(miqdor6 + 6);
    } else if (e == 1) {
      setMiqdor6(miqdor6 - 6);
    }
  }

  return (
    <div className="w-[100%] h-full bg-[#121212]">
      <div
        style={{ background: "linear-gradient(to bottom, #3333a3, #121212)" }}
        className="px-[21px]"
      >
        <div className="pt-[20px] flex gap-5">
          <button
            onClick={() => {
              qoshish(1);
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.5426 19.302C12.1382 19.7064 12.1547 20.3669 12.5788 20.7506L23.2737 30.4269C23.7856 30.8901 24.5761 30.8506 25.0392 30.3386C25.5024 29.8267 25.4629 29.0362 24.951 28.5731L15.4254 19.9547L24.9962 10.3839C25.4843 9.89573 25.4843 9.10427 24.9962 8.61612C24.508 8.12796 23.7166 8.12796 23.2284 8.61612L12.5426 19.302Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              qoshish(5);
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.5" cx="20" cy="20" r="20" fill="black" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.0702 19.302C27.4745 19.7064 27.458 20.3669 27.034 20.7506L16.3391 30.4269C15.8272 30.8901 15.0367 30.8506 14.5735 30.3386C14.1103 29.8267 14.1499 29.0362 14.6618 28.5731L24.1874 19.9547L14.6166 10.3839C14.1284 9.89573 14.1284 9.10427 14.6166 8.61612C15.1047 8.12796 15.8962 8.12796 16.3843 8.61612L27.0702 19.302Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        <p className="text-[29px] mt-2 mb-2 text-white font-[700]">
          Good afternoon
        </p>
        <div className="div-1">
          {kopKorilganlari.slice(miqdor6 - 6, miqdor6).map((e, index) => (
            <div
              onClick={() => {
                malumodJonatish(e);
              }}
              key={index}
              className="bg-[#f7f4f451] flex items-center gap-5 rounded-[7px]"
            >
              <img
                className="h-[60px] rounded-l-[7px]"
                src={e.images[0]?.url}
                alt={e.name}
              />{" "}
              <p className="font-[700] text-[17px] text-[#fff] tracking-[1px]">
                {capitalize(e.name)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-[21px] pb-24">
        {malumodlar?.malumod1 && (
          <div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-[700] text-[25px] text-white ">
                {malumodlar?.malumod1?.data?.message}
              </p>
              <p
                onClick={() => {
                  miqdorlar1();
                }}
                style={{
                  backgroundColor: `${miqdor1 == 100 ? "#2600ff" : "#393838"}`,
                }}
                className="text-[14px] text-white btn btn-sm"
              >
                SEE ALL
              </p>
            </div>
            <div className="flex flex-wrap  justify-between text-white mt-2 ">
              {malumodlar?.malumod1?.data &&
                malumodlar.malumod1.data.playlists.items.map(
                  (
                    e,
                    idx // Namunalarda 4 ta "Chill Mix" ko'rsatish
                  ) =>
                    idx <= miqdor1 ? (
                      <div
                        onClick={() => {
                          malumodJonatish(e);
                        }}
                        key={idx}
                        className="max-w-[210px] p-[15px] rounded-[8px] drop-shadow-lg hover:bg-[#25252]"
                      >
                        <img
                          src={e.images[0].url ? e.images[0].url : null}
                          className="w-full rounded-[10px]"
                          alt=""
                        />
                        <p className="font-[700] text-[16px] tracking-[1.5px] mt-[17px]">
                          {capitalize(e.name)}
                        </p>
                        <p className="font-[600] text-[13px] tracking-[0.2px] text-[#b3b3b3] mt-[5px]">
                          {capitalize(sozlarniKesish(e.description))}
                        </p>
                      </div>
                    ) : null
                )}
            </div>
          </div>
        )}
        {malumodlar?.malumod2 && (
          <div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-[700] text-[25px] text-white ">
                {malumodlar?.malumod2?.data?.message}
              </p>
              <p
                onClick={() => {
                  miqdorlar2();
                }}
                style={{
                  backgroundColor: `${miqdor2 == 100 ? "#2600ff" : "#393838"}`,
                }}
                className="text-[14px] text-white btn btn-sm"
              >
                SEE ALL
              </p>
            </div>
            <div className="flex flex-wrap  justify-between text-white mt-2 ">
              {malumodlar?.malumod2?.data &&
                malumodlar.malumod2.data.playlists.items.map(
                  (
                    e,
                    idx // Namunalarda 4 ta "Chill Mix" ko'rsatish
                  ) =>
                    idx <= miqdor2 ? (
                      <div
                        onClick={() => {
                          malumodJonatish(e);
                        }}
                        key={idx}
                        className="max-w-[210px] p-[15px] rounded-[8px] drop-shadow-lg hover:bg-[#25252]"
                      >
                        <img
                          src={e.images[0].url ? e.images[0].url : null}
                          className="w-full rounded-[10px]"
                          alt=""
                        />
                        <p className="font-[700] text-[16px] tracking-[1.5px] mt-[17px]">
                          {capitalize(e.name)}
                        </p>
                        <p className="font-[600] text-[13px] tracking-[0.2px] text-[#b3b3b3] mt-[5px]">
                          {capitalize(sozlarniKesish(e.description))}
                        </p>
                      </div>
                    ) : null
                )}
            </div>
          </div>
        )}
        {malumodlar?.malumod3 && (
          <div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-[700] text-[25px] text-white ">
                {malumodlar?.malumod3?.data?.message}
              </p>
              <p
                onClick={() => {
                  miqdorlar3();
                }}
                style={{
                  backgroundColor: `${miqdor3 == 100 ? "#2600ff" : "#393838"}`,
                }}
                className="text-[14px] text-white btn btn-sm"
              >
                SEE ALL
              </p>
            </div>
            <div className="flex flex-wrap  justify-between text-white mt-2 ">
              {malumodlar?.malumod3?.data &&
                malumodlar.malumod3.data.playlists.items.map(
                  (
                    e,
                    idx // Namunalarda 4 ta "Chill Mix" ko'rsatish
                  ) =>
                    idx <= miqdor3 ? (
                      <div
                        onClick={() => {
                          malumodJonatish(e);
                        }}
                        key={idx}
                        className="max-w-[210px] p-[15px] rounded-[8px] drop-shadow-lg hover:bg-[#25252]"
                      >
                        <img
                          src={e.images[0].url ? e.images[0].url : null}
                          className="w-full rounded-[10px]"
                          alt=""
                        />
                        <p className="font-[700] text-[16px] tracking-[1.5px] mt-[17px]">
                          {capitalize(e.name)}
                        </p>
                        <p className="font-[600] text-[13px] tracking-[0.2px] text-[#b3b3b3] mt-[5px]">
                          {capitalize(sozlarniKesish(e.description))}
                        </p>
                      </div>
                    ) : null
                )}
            </div>
          </div>
        )}
        {malumodlar?.malumod4 && (
          <div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-[700] text-[25px] text-white ">
                {malumodlar?.malumod4?.data?.message}
              </p>
              <p
                onClick={() => {
                  miqdorlar4();
                }}
                style={{
                  backgroundColor: `${miqdor4 == 100 ? "#2600ff" : "#393838"}`,
                }}
                className="text-[14px] text-white btn btn-sm"
              >
                SEE ALL
              </p>
            </div>
            <div className="flex flex-wrap  justify-between text-white mt-2 ">
              {malumodlar?.malumod4?.data &&
                malumodlar.malumod4.data.playlists.items.map(
                  (
                    e,
                    idx // Namunalarda 4 ta "Chill Mix" ko'rsatish
                  ) =>
                    idx <= miqdor4 ? (
                      <div
                        onClick={() => {
                          malumodJonatish(e);
                        }}
                        key={idx}
                        className="max-w-[210px] p-[15px] rounded-[8px] drop-shadow-lg hover:bg-[#25252]"
                      >
                        <img
                          src={e.images[0].url ? e.images[0].url : null}
                          className="w-full rounded-[10px]"
                          alt=""
                        />
                        <p className="font-[700] text-[16px] tracking-[1.5px] mt-[17px]">
                          {capitalize(e.name)}
                        </p>
                        <p className="font-[600] text-[13px] tracking-[0.2px] text-[#b3b3b3] mt-[5px]">
                          {capitalize(sozlarniKesish(e.description))}
                        </p>
                      </div>
                    ) : null
                )}
            </div>
          </div>
        )}
        {malumodlar?.malumod5 && (
          <div>
            <div className="flex justify-between items-center mt-5">
              <p className="font-[700] text-[25px] text-white ">
                {malumodlar?.malumod5?.data?.message}
              </p>
              <p
                onClick={() => {
                  miqdorlar5();
                }}
                style={{
                  backgroundColor: `${miqdor5 == 100 ? "#2600ff" : "#393838"}`,
                }}
                className="text-[14px] btn btn-sm text-white"
              >
                SEE ALL
              </p>
            </div>
            <div className="flex flex-wrap  justify-between text-white mt-2 ">
              {malumodlar?.malumod5?.data &&
                malumodlar.malumod5.data.playlists.items.map(
                  (
                    e,
                    idx // Namunalarda 4 ta "Chill Mix" ko'rsatish
                  ) =>
                    idx <= miqdor5 ? (
                      <div
                        onClick={() => {
                          malumodJonatish(e);
                        }}
                        key={idx}
                        className="max-w-[210px] p-[15px] rounded-[8px] drop-shadow-lg hover:bg-[#25252]"
                      >
                        <img
                          src={e.images[0].url ? e.images[0].url : null}
                          className="w-full rounded-[10px]"
                          alt=""
                        />
                        <p className="font-[700] text-[16px] tracking-[1.5px] mt-[17px]">
                          {capitalize(e.name)}
                        </p>
                        <p className="font-[600] text-[13px] tracking-[0.2px] text-[#b3b3b3] mt-[5px]">
                          {capitalize(sozlarniKesish(e.description))}
                        </p>
                      </div>
                    ) : null
                )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
