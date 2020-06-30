// import React, {useState} from 'react';
// import { animated, useTransition} from 'react-spring';

// const Intro = () => {


//     const [isPageLoaded, setQuote] = useState(false);
//     const transition = useTransition(isPageLoaded, key => key, {
//         from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//         enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//         leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//     })
//         return (
//               <div className='intro-container'>
//             {transition.map(({item, key, props}) => (
//                 item && <div>
//                     <animated.h1 key={key} style={props} className='intro-left'>Discipline</animated.h1>
//                     <animated.h1 key={key} style={props} className='intro-right'>Equals</animated.h1>
//                     <animated.h1 key={key} style={props} className='intro-left'>Freedom</animated.h1>
//                     </div>
//         ))}
//                     <button onClick={()=> setQuote(!isPageLoaded)}>Get some Jocko quote.</button>
//         </div>
//         )}
// export default Intro;