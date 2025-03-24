'use client';
import Image from 'next/image';
import ButtonGenerator from './components/ButtonGenerator';
import { useState } from 'react';

const Home: React.FC = () => {
  const [quote, setQuote] = useState<{ author: string; statement: string }>({
    author: '',
    statement: '',
  });

  return (
    <>
      <header>
        <nav className="p-3 pt-6 md:p-10 flex flex-col items-center ">
          <h1 className="font-bold text-6xl tracking-widest">
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
            A generator of random quotes by great thinkers
          </h2>
          <Image
            src="/philosophers-min.jpg"
            alt="philosophers talking"
            width={1201}
            height={801}
            priority={true}
            className="image"
          ></Image>
          <ButtonGenerator setQuote={setQuote}></ButtonGenerator>
        </div>
        <div>
          {quote.statement !== '' && (
            <div className="text-center p-10  teal-bg ">
              <p className="italic font-sans text-xl">{quote.statement}</p>
              <p className="font-bold mt-2.5">{quote.author}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
