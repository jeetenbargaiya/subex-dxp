
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Subex | Intelligence for a Connected World",
    template: "%s | Subex",
  },
  description:
    "Subex brings an AI-first approach to business assurance, fraud management and partner ecosystem management, helping telecom operators anticipate and deliver real-time outcomes.",
  applicationName: "Subex",
  keywords: [
    "Subex",
    "Business Assurance",
    "Fraud Management",
    "Telecom Analytics",
    "Partner Ecosystem Management",
    "Artificial Intelligence",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sora.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
