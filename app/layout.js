import { Cormorant_Garamond, Playfair_Display, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const script = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: "Homecoming of Rashen & Rashmi | 03.12.2026",
  description:
    "Mr & Mrs Rukmal Fernando request the pleasure of your company at the homecoming of Rashen with his bride Rashmi — 3rd December 2026, Moratuwa.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
