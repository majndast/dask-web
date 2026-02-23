import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DASK – Servis a modernizace obráběcích strojů",
  description:
    "Poradenské a servisní služby v oblasti obráběcích strojů od roku 1999. Opravy SPT 16/32, certifikovaný servis LNS, náhradní díly. Provozovna Vyšetice.",
  keywords: "servis CNC, obráběcí stroje, SPT 16, SPT 32, LNS, Siemens, Fanuc, náhradní díly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body className={`${geist.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
