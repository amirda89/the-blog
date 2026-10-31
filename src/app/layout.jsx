import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "The Blog",
  description: "The Blog Web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-white dark:bg-[#090d1f]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
