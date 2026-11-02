
import type { Metadata } from "next";
import { Outfit, Inter, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Footer from "@/components/layouts/Footer";
import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BetterTogether",
  description: "Together, we make a difference.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${outfit.variable} ${inter.variable} min-h-full flex flex-col antialiased`}>
        <ToastContainer position="top-right" autoClose={3000} />
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
