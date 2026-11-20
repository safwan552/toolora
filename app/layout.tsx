import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://toolora-tools.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Toolsyra — Simple tools. Fast results.", template: "%s | Toolsyra" },
  description: "Free, simple and fast online tools for images, PDFs, text and everyday tasks.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
