import type { Metadata } from "next";import "./globals.css";import Header from "@/components/Header";import Footer from "@/components/Footer";
export const metadata:Metadata={title:{default:"Toolora — Simple tools. Fast results.",template:"%s | Toolora"},description:"Free, simple and fast online tools for images, PDFs, text and everyday tasks.",metadataBase:new URL("https://toolora.pages.dev")};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
