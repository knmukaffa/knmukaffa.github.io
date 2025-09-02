import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "QA Engineer Portfolio — Khairun N. Mukaffa",
  description: "QA Engineer specializing in automation (Selenium/Appium), API testing, and performance.",
  openGraph: {
    title: "QA Engineer Portfolio — Khairun N. Mukaffa",
    description: "Automation, API, Performance. Quality at speed.",
    url: "https://example.dev",
    siteName: "Khairun Najmi Mukaffa - Software QA Engineer",
    images: ["/og.png"],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900">
        <div className="min-h-dvh flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
