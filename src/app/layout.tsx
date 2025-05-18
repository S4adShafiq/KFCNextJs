import "../app/globals.css";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "KFC Clone",
  description: "Order your favorite KFC-style meals online.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-6xl mx-auto p-4">{children}</main>

      </body>
    </html>
  );
}
