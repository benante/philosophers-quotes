'use client';
import React from 'react';
import generateRandom from '../quotes';

interface buttonProps {
  setQuote: React.Dispatch<
    React.SetStateAction<{ author: string; statement: string }>
  >;
}

const ButtonGenerator: React.FC<buttonProps> = ({ setQuote }) => {
  const handleClick = () => {
    console.log('clicked');
    setQuote(generateRandom);
  };
  return (
    <button
      className="cursor-pointer p-2.5 mt-7 text-xl border  box-shadow   rounded  bg-[var(--teal)] text-black  hover:bg-[var(--beige)]"
      onClick={handleClick}
    >
      Get Some Wisdom
    </button>
  );
};

export default ButtonGenerator;
