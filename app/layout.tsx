import type { Metadata } from "next";
import "./globals.css";
import { Exo_2 } from "next/font/google";
import Navbar from "./components/Navbar";

const exo2 = Exo_2({
  weight: ["400", "700"], // Add more weights if you want
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saketh Pai | Portfolio",
  description: "Portfolio website of Saketh Sunil Pai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo2.className} antialiased`}
        style={
          {
            "--font-exo2": exo2.style.fontFamily,
          } as React.CSSProperties
        }
      >
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
