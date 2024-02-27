import React from 'react'
// import PlayPause from './playPause';

const Player = (props) => {
    let {sound_name,url,img} = props.data;
    console.log(props)
  return (
    <div>
        <figure>
            <picture>
                <img src={img}  onClick={()=> props.handleClick(url)} />
            </picture>
            <h1 id='soundName'>{sound_name}</h1>
        </figure>
    </div>
  )
}

export default Player;