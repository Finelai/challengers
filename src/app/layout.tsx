import React from 'react';

import type { Metadata } from 'next';

import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';

import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Challengers',
  description: 'Challenges that improve you',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
