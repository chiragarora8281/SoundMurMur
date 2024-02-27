import React ,{Fragment} from 'react'
import AudioBlock from './components/AudioBlock'
import rain from "./components/sounds/soft-rain-ambient-111154.mp3";
import thunder from "./components/sounds/thunder.mp3";
import waves from "./components/sounds/ocean-waves-112906.mp3";
import wind from "./components/sounds/wind-outside-sound-ambient-141989.mp3";
import fire from "./components/sounds/fire-sound-efftect-21991.mp3";
import birds from "./components/sounds/birds-singing-nature-sounds-8001.mp3";
import crickets from "./components/sounds/night-ambience-17064.mp3";
import coffeeShop from "./components/sounds/coffee-shop-chatter-61978.mp3";
import singingBowl from "./components/sounds/singing-bowl-deep-sound-27532.mp3"
import whiteBox from "./components/sounds/white-noise-179828.mp3";
import "./App.css"
import NavBar from './Hamburger';
const App = () => {
  const audioArr = [
  {
  sound_name : "Rain",
  // url : "https://youtu.be/mPZkdNFkNps?si=P460sMDX0cEk9kTG",
  url : rain,
  img : "https://i.etsystatic.com/36262552/r/il/f67e22/4153418001/il_570xN.4153418001_ihyr.jpg"
  },
  {
  sound_name : "Thunder",
  url : thunder,
  img :"https://i.pinimg.com/564x/30/56/45/3056457e055f11d1aaa47884d25442e9.jpg"
  },
  {
    sound_name : "Waves",
    // url : "https://youtu.be/btmjDyff6E8?si=7BoHtSWDBBR-H8ub",
    url: waves,
    img: "https://i.pinimg.com/736x/04/45/40/044540753d1b379b1a481cc505f01bf9.jpg"
  },
  {
    sound_name : "Wind",
    // url : "https://youtu.be/sGkh1W5cbH4?si=kBbqAw-XazCkoX_6",
    url: wind,
    img : "https://i.pinimg.com/564x/35/10/93/351093f99e2c932e4739a5c65d166667.jpg"
  },
  {
    sound_name : "Fire",
    // url : "https://www.youtube.com/live/5IviGZskET8?si=gCjm9kEC9DDQgb54",
    url: fire,
    img: "https://i.pngimg.me/thumb/f/720/comvecteezy353977.jpg"

  },
  {
    sound_name : "Birds",
    // url : "https://youtube/ZPrOrs3euiI?si=UzcLcqriNsdecFcU",
    url: birds,
    img : "https://i.pinimg.com/originals/ee/7e/84/ee7e8450407d98a43bd59f23b503f6fc.jpg"
  },
  {
    sound_name : "Crickets",
    // url : "https://youtu.be/5-UWXylsgag?si=mutbGXVi39Vz1nHZ",
    url: crickets,
    img : "https://png.pngtree.com/png-clipart/20191121/original/pngtree-football-grass-icon-png-image_5102460.jpg"
  },
  {
    sound_name : "Coffee Shop",
    // url : "https://youtu.be/gaGrHUekGrc?si=3igZno5c3fau_81y",
    url: coffeeShop,
    img : "https://i.pinimg.com/736x/a0/04/32/a00432a9d6e19be20e0fa5c7f87a3af5.jpg"
  },
  ,
  {
    sound_name : "Singing Bowl",
    // url : "https://youtu.be/eNmjWjpxUOM?si=WEKJWSENlBwpC8uZ",
    url: singingBowl,
    img : "https://static.vecteezy.com/system/resources/thumbnails/015/903/084/small/spiritual-bowl-icon-outline-style-vector.jpg"
  }, 
  {
    sound_name : "White Noise",
    // url : "https://youtu.be/yLOM8R6lbzg?si=kItSLXliet7NNSRL",
    url: whiteBox,
    img : "https://img.freepik.com/premium-vector/retro-tv-icon-classic-television-illustration-symbol-sign-video-chanell-vector_744955-489.jpg?w=2000"
  }
  ]

  return (
    <div>
      <NavBar />
      <AudioBlock audioArr={audioArr} />
    </div>
  );
}

export default App;