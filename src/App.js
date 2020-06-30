import React, {useState, useCallback } from 'react';
import {useTransition, animated} from 'react-spring';
import './App.css';
import quotes from './quotes';

export default function App(){

    const [quote, getQuote] = useState(0);
    const onClick = useCallback(() => getQuote(quotes[Math.floor(Math.random() * quotes.length)].quote), [])
    const transitions = useTransition(quote, null, {
  from: { opacity: 0},
  enter: { opacity: 1},
  leave: { opacity: 0},
})

  return (
    <div className="App">
      <div className = 'quote-container'>
      {transitions.map(
        ({ item, key, props}) =>
        item ?
          <animated.div className = 'quote-bubble' style={{...props, position: 'absolute' }}>
          <animated.div className = 'quote'style={props}>{item}</animated.div>
          </animated.div>
        : <h1 className='intro-text'>GET SOME.</h1>
      )}
        <button className='getQuoteButton' onClick={onClick}>Scary button.</button>
      </div>
    </div>
  );
    }