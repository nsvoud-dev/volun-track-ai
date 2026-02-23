import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { AppWalletProvider } from "@/components/wallet-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "VolunTrack AI – Donor Transparency Dashboard",
  description:
    "Autonomous Treasury Agent for Ukrainian volunteers. Monitor, swap, and report on Solana donations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans min-h-screen`} suppressHydrationWarning>
        <div suppressHydrationWarning>
          <AppWalletProvider>
            <Header />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </AppWalletProvider>
        </div>
      </body>
    </html>
  );
}
