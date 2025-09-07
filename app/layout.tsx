import "./globals.css";
import { inter } from "./fonts";
import VisitorCounter from "@/components/VisitorCounter";

export const metadata = {
  title: "Arbusa",
};

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
        <main className="flex-1">{children}</main>
        <footer className="mt-10">
          <VisitorCounter />
        </footer>
      </body>
    </html>
  );
}
