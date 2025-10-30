import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from '@vercel/analytics/next';

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
  description: "Topluluk yönetimi, teknoloji, medya ve espor üzerine yenilikçi çözümler üreten, güçlü bir simgeye ve organizasyonel yapıya sahip, genç ve disiplinli bir topluluk yapılanması.",
  keywords: ["topluluk", "esports", "valorant", "yazılım", "teknoloji", "medya", "discord", "türkiye", "hydrabon"],
  authors: [{ name: "HydRaboN Team" }],
  creator: "HydRaboN",
  publisher: "HydRaboN",
  metadataBase: new URL("https://hydrabon.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://hydrabon.com",
    title: "HydRaboN - Çok Yönlü Dijital Topluluk",
    description: "Topluluk yönetimi, teknoloji, medya ve espor üzerine yenilikçi çözümler üreten, güçlü bir simgeye ve organizasyonel yapıya sahip, genç ve disiplinli bir topluluk yapılanması.",
    siteName: "HydRaboN",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "HydRaboN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HydRaboN - Çok Yönlü Dijital Topluluk",
    description: "Topluluk yönetimi, teknoloji, medya ve espor üzerine yenilikçi çözümler üreten, güçlü bir simgeye ve organizasyonel yapıya sahip, genç ve disiplinli bir topluluk yapılanması.",
    images: ["/logo-transparent.png"],
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HydRaboN',
              url: 'https://hydrabon.com',
              logo: 'https://hydrabon.com/logo-transparent.png',
              sameAs: [
                'https://discord.gg/hydrabon',
                'https://www.youtube.com/@hydrabon',
                'https://x.com/hydrabonx',
                'https://instagram.com/hydrabon.official',
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-dark-950 text-white antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

