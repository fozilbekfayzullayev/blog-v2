import "./(frontend)/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NotFound from "./(frontend)/not-found";

export const metadata: Metadata = {
  title: "404 | Fozilbek",
};

export default function GlobalNotFound() {
  return (
    <html lang="uz" className="light" style={{ colorScheme: "light" }}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          <NotFound />
        </main>
        <Footer />
      </body>
    </html>
  );
}
