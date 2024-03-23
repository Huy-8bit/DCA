import type { Metadata } from "next";
import "./globals.css";
import '@/styles/index.scss'
import Header from "@/components/header";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Degen Capital Authentic",
  description: "Powered by communities, revolutionizes traditional venture capital models by prioritizing community engagement and collaboration throughout the investment",
  openGraph: {
    title: "Degen Capital Authentic",
    description: "Powered by communities, revolutionizes traditional venture capital models by prioritizing community engagement and collaboration throughout the investment",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-text-primary relative">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
