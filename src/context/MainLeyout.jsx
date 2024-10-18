import React, { createContext, useState } from "react";

// Context yaratish
export const MusicContext = createContext();

// Provider yaratish
export const MusicProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(null); // Saqlanadigan obyekt

  return (
    <MusicContext.Provider value={{ currentTrack, setCurrentTrack }}>
      {children}
    </MusicContext.Provider>
  );
};
