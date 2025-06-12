import React from 'react';
import { useMusic } from '../Context/MusicProvider';
import { Play, Pause, Trash } from 'lucide-react';

const Library = () => {
  const { library, isPlaying, currentSong, playSong, pauseSong,removeFromLibrary } = useMusic();

  const toggle = (song) => {
    if (currentSong && currentSong.audioUrl === song.audioUrl) {
      isPlaying ? pauseSong() : playSong(song);
    } else {
      playSong(song);
    }
  };

  return (
    <div>
      <h1 className="text-white font-bold text-4xl p-12 font-serif">🎵 My Library 🎵</h1>

      {library.length === 0 ? (
        <h1 className="text-center text-white">No songs in your library yet!</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
          {library.map((elem) => (
            <div
              key={elem.id}
              className="flex items-center gap-4 p-4 border rounded shadow bg-pink w-full h-auto min-h-[200px]"
            >
              <div>
                <img
                  src={elem.localArt}
                  alt="art"
                  className={`w-24 sm:w-32 md:w-40 lg:w-48 xl:w-64 object-cover duration-500 ${
                    isPlaying && currentSong?.audioUrl === elem.audioUrl ? 'animate-pulse' : ''
                  }`}
                />

                <h3 className="font-semibold text-white font-serif sm:text-sm md:text-lg lg:text-xl text-center pt-5">
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
  onClick={() => removeFromLibrary(elem)}
  className="p-2 rounded-full bg-purple-600 hover:bg-pink-800 text-white shadow-md"
  title="Remove from Library"
>
  <Trash size={20} />
</button>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Library;
