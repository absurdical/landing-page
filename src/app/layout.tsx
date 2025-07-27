import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "smiledust",
  description: "The periodic table of my web apps",
  manifest: '/manifest.json',
  icons: {
      icon: '/icons-icon-192x192.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 shadow-md">
          <Link
            href="/"
            className="text-3xl text-pink-500 smiledust-font hover:text-pink-400 transition"
          >
            smiledust
          </Link>
          {/* Placeholder for nav links if you want later */}
          <nav>
            {/* <Link href="/about" className="ml-4">About</Link> */}
          </nav>
        </header>

        {/* Main content */}
        <main className="max-w-6xl mx-auto p-6">{children}</main>
        
        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-4">
          © 2025 smiledust
        </footer>
      </body>
    </html>
  );
}
