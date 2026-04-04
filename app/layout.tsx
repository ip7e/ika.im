import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import Footer from "./components/footer";
import "./global.css";
import { baseUrl } from "./sitemap";
import Logo from "./components/logo";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "/favicon.svg",
  },
  title: {
    default: "Ika's Personal Space",
    template: "%s | Ika's Personal Space",
  },
  description: "Javascript, Technology, Personal Reflections",
  openGraph: {
    title: "Ika's Personal Space",
    description: "Javascript, Technology, Personal Reflections",
    url: baseUrl,
    siteName: "Ika's Personal Space",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hello-world/og-hello-world.png"],
    creator: "@itsikap",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PlausibleProvider>
      <html
        lang="en"
        className={cx(
          "text-black bg-white ",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <body className="px-8 mx-auto mt-8 max-w-lg antialiased md:max-w-2xl">
          <header className="flex gap-4 items-center my-10 h-20">
            <Link href="/">
              <Logo />
            </Link>
            <div className="flex-grow font-sans text-base">
              <h1>
                Blog by{" "}
                <a
                  className="text-orange-600 underline"
                  href="https://twitter.com/itsikap"
                >
                  Ika Pkhakadze
                </a>
              </h1>
              <p className="text-sm">
                Javascript, Technology, Personal Reflections
              </p>
            </div>
          </header>
          <section>
            <div className="my-8">{children}</div>
          </section>

          <Footer />
          <SpeedInsights />
        </body>
      </html>
    </PlausibleProvider>
  );
}
