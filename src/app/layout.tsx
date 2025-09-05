import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./styles/globals.scss";
import "./styles/home.scss";
import "./styles/nav.scss";
import "./styles/order.scss";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const Poppins = localFont({
  src: [
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Poppins-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-Poppins',
  display: 'swap',
});

const NotoSerifDevanagari = localFont({
  src: [
    {
      path: './fonts/NotoSerifDevanagari-Black.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifDevanagari-ExtraBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifDevanagari-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifDevanagari-SemiBold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifDevanagari-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifDevanagari-Regular.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifDevanagari-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifDevanagari-ExtraLight.ttf',
      weight: '150',
      style: 'normal',
    },
    {
      path: './fonts/NotoSerifDevanagari-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
  ],
  variable: '--font-NotoSerifDevanagari',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Saraswat Co-operative Bank Ltd.",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppins.variable} ${NotoSerifDevanagari.variable} antialiased`}>
        <Toaster position="top-right" reverseOrder={false} /> 
            {children}
          <Footer />
      </body>
    </html>
  );
}
