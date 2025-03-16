import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'СтроиТех - Вашият надежден партньор в строителството',
  description:
    'Професионални строителни услуги с високо качество и спазване на сроковете',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='bg' suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className='flex-grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
