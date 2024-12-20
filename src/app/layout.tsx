import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/app/globals.css';
import { AppNavigation } from '@/components/navigation';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Call to Action TO',
  description: 'Make your voice heard at Toronto City Council.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <AppNavigation />
        {children}
      </body>
    </html>
  );
}
