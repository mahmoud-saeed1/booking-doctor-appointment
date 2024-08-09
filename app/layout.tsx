"use client";

import { Inter } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import "./globals.css";
import { MenuFavoriteProvider } from "./_context/MenuFavoriteContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="description"
        content="Atsha strives to present you with an unforgettable  experience that satisfies your plate with delicious cuisines and good vibes only."
      ></meta>
      <title>Booking-Appointment</title>
      <body className={inter.className}>
        <MenuFavoriteProvider>
          <Header />
          {children}
          <Footer />
        </MenuFavoriteProvider>
      </body>
    </html>
  );
}
