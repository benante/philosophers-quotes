'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
import generateRandom from './quotes';

const Home: React.FC = () => {
  const [quote, setQuote] = useState<{ author: string; statement: string }>({
    author: '',
    statement: '',
  });

  const divQuote = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setQuote(generateRandom);
    setTimeout(() => {
      if (divQuote) {
        divQuote.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <>
      <header>
        <nav className="p-3 pt-6 md:p-10 flex flex-col items-center ">
          <h1 className="font-bold text-6xl sm:text-8xl tracking-widest">
            Philosophy Quotes
          </h1>
        </nav>
      </header>
      <main>
        <div
          id="container"
          className="flex flex-col items-center gap-3 p-3 pb-10  md:p-10 "
        >
          <p className="text-xs tracking-widest leading-8">
            In a world full of uncertainty, pain, and grief, only philosophy can
            help you out… or at least confuse you so much that you forget your
            problems
          </p>
          <h2 className="text-2xl text-right">
            A <span>generator</span> of random <span>quotes</span> by great{' '}
            <span>thinkers</span>
          </h2>
          <Image
            src="/philosophers-min.jpg"
            alt="philosophers talking"
            width={1201}
            height={801}
            priority={true}
            className="image"
          ></Image>
          <button
            className="cursor-pointer p-3 mt-7 text-xl border  box-shadow   rounded  bg-[var(--teal)] text-black   hover:bg-[var(--beige)] active:bg-[var(--beige)]"
            onClick={handleClick}
          >
            Get a quote
          </button>
        </div>
        <div>
          {quote.statement !== '' && (
            <div ref={divQuote} className="text-center p-20  teal-bg ">
              <p className=" text-xl">{quote.statement}</p>
              <p className="font-bold mt-2.5">{quote.author}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
