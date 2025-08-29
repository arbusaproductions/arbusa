import "./globals.css";
import { Inter, Anton } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = { title: "Arbusa" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${inter.className} bg-neutral-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
