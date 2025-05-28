import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "ReportU - Cross-Border Offense Reporting Platform",
  description: "Simplify offense reporting across Malaysia and Singapore. Submit reports with multimedia evidence, get real-time updates, and ensure your voice is heard.",
  keywords: "offense reporting, Malaysia, Singapore, crime reporting, traffic violations, government services",
  authors: [{ name: "ReportU Team" }],
  creator: "ReportU",
  publisher: "ReportU",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reportu.app"),
  openGraph: {
    title: "ReportU - Cross-Border Offense Reporting Platform",
    description: "Simplify offense reporting across Malaysia and Singapore with our AI-powered platform.",
    url: "https://reportu.app",
    siteName: "ReportU",
    images: [
      {
        url: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "ReportU Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReportU - Cross-Border Offense Reporting Platform",
    description: "Simplify offense reporting across Malaysia and Singapore with our AI-powered platform.",
    images: ["https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp"],
  },
  icons: {
    icon: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    shortcut: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    apple: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gray-900 text-white overflow-x-hidden`}
      >
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          {children}
        </div>
      </body>
    </html>
  );
}
