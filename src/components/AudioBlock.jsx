import React , {Fragment} from 'react'
import Player from './Player'


const AudioBlock = ({audioArr}) => {

    let handleClick = val =>{
        const audio =  new Audio(val)
        audio.play()
    }

  return (
    <div>
        <div>
        <p id='softMurMur'>A SOFT MURMUR</p>
        <p id='ambient'>Ambient sounds to wash away distraction.</p>
        </div>
    <article>
        {audioArr.map((audio , index) =>{
            return( 
                <Fragment key={index+1}>
                    <Player key = {index+1} data ={audio} handleClick= {handleClick} />
                </Fragment>
                )
            }
            )}
    </article>
</div>
  )
}

export default AudioBlock


// import React, { Fragment } from 'react';
// import Player from './Player.jsx';

// const AudioBlock = ({ audioArr }) => {
//     let handleClick = (val) => {
//         const audio = new Audio(val);
//         audio.play();
//     };

//     return (
//         <div>
//             <div>
//                 <p id='softMurMur'>A SOFT MURMUR</p>
//                 <p id='ambient'>Ambient sounds to wash away distraction.</p>
//             </div>
//             <article>
//                 {audioArr.map((audio, index) => (
//                     <Fragment key={index + 1}>
//                         <Player key={index + 1} data={audio} handleClick={handleClick} />
//                     </Fragment>
//                 ))}
//             </article>
//         </div>
//     );
// };

// export default AudioBlock;
