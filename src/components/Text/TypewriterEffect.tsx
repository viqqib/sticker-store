// components/TypewriterEffect.tsx
import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core'; // Ensure to import from 'core' explicitly

const TypewriterEffect: React.FC = () => {
  const typewriterContainer = useRef(null);
  let typewriterInstance: any = null; // Explicitly define as any type

  useEffect(() => {
    if (typewriterContainer.current) {
      typewriterInstance = new Typewriter(typewriterContainer.current!, {
        strings: ["Beli", "Bikin", "Custom"], // Array of strings to display
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 50,
        cursor: '',
      });

      return () => {
        typewriterInstance.stop();
      };
    }
  }, []);

  return (
    <span className='font-nunito font-black z-10 text-shadow-custom' ref={typewriterContainer}>
      {/* Content will be dynamically typed here */}
    </span>
  );
};

export default TypewriterEffect;
