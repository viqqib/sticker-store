import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from '@/redux/StoreProvider';
import '@fontsource/dm-sans/latin.css';
import '@fontsource/dm-serif-display/latin.css';
import 'tailwindcss/tailwind.css';
import '@fontsource/nunito-sans/latin.css'; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stickoala - Sticker & Pin Store",
  description: "Sticker Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} bg-greenst`}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
