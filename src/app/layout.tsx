import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "HydRaboN - Çok Yönlü Dijital Topluluk",
  description: "Espor, teknoloji, medya ve topluluk yönetiminde yenilikçi çözümler üreten, güçlü bir simgeye ve organizasyonel yapıya sahip, genç ve disiplinli bir topluluk yapılanması.",
  keywords: ["topluluk", "esports", "valorant", "yazılım", "teknoloji", "medya", "discord", "türkiye", "hydrabon"],
  authors: [{ name: "HydRaboN Team" }],
  creator: "HydRaboN",
  publisher: "HydRaboN",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://hydrabon.com",
    title: "HydRaboN - Çok Yönlü Dijital Topluluk",
    description: "Espor, teknoloji, medya ve topluluk yönetiminde yenilikçi çözümler üreten, güçlü bir simgeye ve organizasyonel yapıya sahip, genç ve disiplinli bir topluluk yapılanması.",
    siteName: "HydRaboN",
  },
  twitter: {
    card: "summary_large_image",
    title: "HydRaboN - Çok Yönlü Dijital Topluluk",
    description: "Espor, teknoloji, medya ve topluluk yönetiminde yenilikçi çözümler üreten, güçlü bir simgeye ve organizasyonel yapıya sahip, genç ve disiplinli bir topluluk yapılanması.",
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-dark-950 text-white antialiased overflow-x-hidden">
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
