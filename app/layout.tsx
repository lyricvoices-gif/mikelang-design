import type { Metadata } from "next";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mikelang.design"),
  title: {
    default: "Michael Lang — Multimodal AI Experience Designer",
    template: "%s — Michael Lang",
  },
  description:
    "Michael Lang designs at the intersection of AI, voice, and human emotion. Co-founder of Lyric Voices. He designs with AI and builds with it too.",
  openGraph: {
    title: "Michael Lang — Multimodal AI Experience Designer",
    description: "Creating at the intersection of AI, voice, and human emotion.",
    url: "https://mikelang.design",
    siteName: "Michael Lang",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <SiteHeader />
        <PageTransition>
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </PageTransition>
      </body>
    </html>
  );
}
