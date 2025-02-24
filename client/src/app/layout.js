import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Abbreviations",
  description: "Useful and Fun Abbreviations all at one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
