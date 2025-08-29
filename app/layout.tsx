import "./globals.css";
import { inter } from "./fonts";

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
