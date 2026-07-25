import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mikelang.design"),
  title: {
    default: "Michael Lang — Multimodal AI Experience Designer",
    template: "%s — Michael Lang",
  },
  description:
    "Michael Lang is a multimodal experience designer who creates at the intersection of AI, voice, and human emotion.",
  openGraph: {
    title: "Michael Lang — Multimodal AI Experience Designer",
    description:
      "Creating at the intersection of AI, voice, and human emotion.",
    url: "https://mikelang.design",
    siteName: "Michael Lang",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
