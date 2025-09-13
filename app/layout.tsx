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
        className={`${inter.className} bg-neutral-950 text-white antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">{children}</main>

        <footer className="mt-10 border-t border-white/10 py-6 text-center text-sm text-neutral-400">
          <div className="mb-2">
            <a href="/impressum" className="hover:underline mx-2">
              Impressum
            </a>
            <span>·</span>
            <a href="/datenschutz" className="hover:underline mx-2">
              Datenschutz
            </a>
          </div>
          <p className="mb-2">
            © {new Date().getFullYear()} Arbusa Productions
          </p>
          <VisitorCounter />
        </footer>
      </body>
    </html>
  );
}
