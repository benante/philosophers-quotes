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
    setQuote(generateRandom);
  };
  return (
    <button
      className="cursor-pointer p-2 mt-4 text-xl rounded  bg-[var(--teal)] text-[var(--beige)] hover:text-[var(--orange)] hover:bg-[var(--beige)]"
      onClick={handleClick}
    >
      Generate a Quote
    </button>
  );
};

export default ButtonGenerator;
