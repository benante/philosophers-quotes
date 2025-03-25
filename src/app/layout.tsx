import type { Metadata } from 'next';
import {
  Montserrat,
  Montserrat_Underline,
  Roboto_Flex,
} from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});
const robotoFlex = Roboto_Flex({
  variable: '--font--roboto-flex',
  subsets: ['latin'],
});
const montserrat_underline = Montserrat_Underline({
  variable: '--montserrat-underline',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Philosophers Quotes',
  description: 'Random quotes by truly great thinkers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${montserrat.variable}  ${robotoFlex.variable} ${montserrat_underline.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
