import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from '@/redux/StoreProvider';
import '@fontsource/dm-sans/latin.css';
import '@fontsource/dm-serif-display/latin.css';
import 'tailwindcss/tailwind.css';
import '@fontsource/nunito-sans/latin.css'; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stickoala - Sticker & Pin",
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
        <link rel="icon" href="/stickerprint.svg" />
      </head>
      <body className="bg-greenst">
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
