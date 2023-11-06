"use client"; 
import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypingComponent = ({ array }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: array,
      typeSpeed: 30,
      loop: true, // Setting loop to true for continuous looping
    });

    return () => {
      typed.destroy();
    };
  }, [array]);

  return (
    <div className="App">
      <span className='TypingText' ref={el} />
    </div>
  );
};

export default TypingComponent;