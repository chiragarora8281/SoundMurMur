// import React, { useState } from 'react';

// const PlayPauseButton = ({ audioSrc }) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const PlayPause = () => {
//     const audio = new Audio(audioSrc);

//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }

//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <button className={`play-pause ${isPlaying ? 'playing' : ''}`} onClick={togglePlayPause}>
//       <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
//     </button>
//   );
// };

// export default PlayPause;



// import React, { useState } from 'react';

// const PlayPause = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleClick = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>
//         {isPlaying ? (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24"
//             viewBox="0 0 24 24"
//             width="24"
//             fill="#000000"
//           >
//             <path d="M0 0h24v24H0z" fill="none" />
//             <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
//           </svg>
//         ) : (
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24"
//             viewBox="0 0 24 24"
//             width="24"
//             fill="#000000"
//           >
//             <path d="M0 0h24v24H0z" fill="none" />
//             <path d="M8 5v14l11-7z" />
//           </svg>
//         )}
//       </button>
//     </div>
//   );
// };

// export default PlayPause;
