'use client';
import styles from '@/app/styles.module.css';

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
        <nav className="p-10 flex flex-col items-center ">
          <h1 className="font-bold text-6xl">Philosophy Quotes</h1>
          <h2 className="text-2xl mt-2">
            A generator of random quotes by great thinkers
          </h2>
        </nav>
      </header>
      <main>
        <div className="p-4 flex flex-col items-center ">
          <Image
            src="/philosophers.jpg"
            alt="philosophers talking"
            width={1201}
            height={801}
            priority={true}
            className={styles.image}
          ></Image>
          <ButtonGenerator setQuote={setQuote}></ButtonGenerator>
          <p>{quote.statement}</p>
          <p>{quote.author}</p>
        </div>
      </main>
    </>
  );
};

export default Home;
