import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  metadataBase: new URL("https://blog-v2-blond.vercel.app"),
  title: {
    default: "Fozilbek | Blog",
    template: "%s | Fozilbek",
  },
  description: "Shaxsiy blog va ijodiy ishlar jamlangan web sayt",
  openGraph: {
    title: "Fozilbek | Blog",
    description: "Shaxsiy blog va ijodiy ishlar jamlanmasi.",
    url: "https://blog-v2-blond.vercel.app",
    siteName: "Fozilbek",
    locale: "uz_UZ",
    type: "website",
    images: [
      {
        url: "/images/og-image.png", // metadataBase tufayli avtomatik to'liq URL bo'ladi
        width: 1200,
        height: 630,
        alt: "Fozilbek | Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fozilbek | Blog",
    description: "Shaxsiy blog va ijodiy ishlar jamlanmasi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uz" className={`h-full antialiased`} suppressHydrationWarning>
      <link
        rel="preload"
        href="/fonts/Inter18pt-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/Inter18pt-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <TooltipProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="flex flex-col h-full">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
