import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: '700',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mini Moka",
  description: "A toy & figurine collectable store perserving precious childhood memories and emotions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}><Providers>{children}</Providers></body>
    </html>
  );
}
