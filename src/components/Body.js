import React from 'react';
import '../App.css';
import { useState, useEffect } from "react";
import '../index.css';
import Player from "./Player";


function Body() {
   const [songs] = useState([
    
    
    {
      title: "One Summer's Day",
      artist: "Joe Hisaishi",
      
      src: "./music/3.ogg",
    },
    {
      title: "A Town with an ocean view",
      artist: "Joe Hisaishi",
      
      src: "./music/5.ogg",
    },
    {
      title: "Howl's Moving Castle",
      artist: "Joe Hisaishi",
      
      src: "./music/4.ogg",
    },
    
    {
      title: "Laputa:Castle in the Sky",
      artist: "Joe Hisaishi",
      
      src: "./music/6.ogg",
    },
   
    {
      title: "My Neighbor Totoro",
      artist: "Joe Hisaishi",
      
      src: "./music/2.ogg",
    },
    {
      title: "Ghibli Songs Mashup",
      artist: "Joe Hisaishi",
      
      src: "./music/7.ogg",
    },

    
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <><div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs} />
    </div></>

  );
}
export default Body;