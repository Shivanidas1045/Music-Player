import React, { createContext, useContext, useRef, useState } from 'react';

const MusicContext = createContext();

const MusicProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());
  const [volume,setVolume]=useState(0.5)
  const [library,setLibrary]=useState([])

  const playSong = (song) => {
    if (!currentSong || currentSong.audioUrl !== song.audioUrl) {
      audioRef.current.src = song.audioUrl;
    }
    audioRef.current.play();
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pauseSong = () => {
  audioRef.current.pause();     // Pause the music
  setIsPlaying(false);
};


const addToLibrary = (song) => {
  const exists = library.some(item => item.audioUrl === song.audioUrl);
  if (!exists) {
    setLibrary(prev => [...prev, song]);
  }
};


  const toggle=()=>{
    if(isPlaying){
      pauseSong()
    }else if(currentSong){
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const removeFromLibrary = (song) => {
  setLibrary((prev) => prev.filter((s) => s.audioUrl !== song.audioUrl));
};
  

  return (
    <MusicContext.Provider value={{ currentSong, isPlaying, playSong,pauseSong,toggle,library,addToLibrary,removeFromLibrary}}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);

export default MusicProvider;
