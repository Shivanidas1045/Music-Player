import React from 'react';
import { useMusic } from '../Context/MusicProvider';
import { SongList } from './SongList'; // Make sure this is an array of song objects
import {Play, Pause, Heart, Plus,HeartCrack, HeartOffIcon} from 'lucide-react';

const NowPlay = () => {
   const { isPlaying,currentSong,pauseSong,playSong,volume,addToLibrary,library,removeFromLibrary } = useMusic();

const toggle = (song) => {
  if (currentSong && currentSong.audioUrl === song.audioUrl) {
    isPlaying ? pauseSong() : playSong(song);
  } else {
    playSong(song);
  }
};







  return (
    <div>
    <h1 className='text-white font-bold text-4xl p-12 font-serif '>🎵 Trending Songs 🎵</h1>    

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
  {SongList.map((elem) => {
    const isInLibrary = library.some(song => song.audioUrl === elem.audioUrl);

    return (
      <div
        key={elem.id}
        className="flex items-center gap-4 p-4 border rounded shadow bg-pink w-full h-auto min-h-[200px]"
      >
        <div>
          <img
            src={elem.localArt}
            alt="images"
            className={`w-24 sm:w-32 md:w-40 lg:w-48 xl:w-64 object-cover duration-500 ${
              isPlaying && currentSong?.audioUrl === elem.audioUrl ? 'animate-pulse' : ''
            }`}
          />
          <h3 className="font-semibold text-white font-serif sm:text-sm md:text-lg lg:text-xl xl:text-xl text-center pt-5">
            {elem.title}
          </h3>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => toggle(elem)}
              className="px-4 py-2 rounded-full text-white bg-pink-600 hover:bg-purple-700 shadow-md flex items-center gap-2"
            >
              {currentSong?.audioUrl === elem.audioUrl && isPlaying ? (
                <>
                  <Pause size={20} />
                  Pause
                </>
              ) : (
                <>
                  <Play size={20} />
                  Play
                </>
              )}
            </button>

            <button
              onClick={() =>
                isInLibrary ? removeFromLibrary(elem) : addToLibrary(elem)
              }
              className="p-2 rounded-full text-pink-500 flex items-center gap-2"
            >
              {isInLibrary ? (
                <Heart size={24} color="pink" fill="pink" />
              ) : (
                <Heart size={24} color="pink" fill="none" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>

    </div>
  );
};

export default NowPlay;
