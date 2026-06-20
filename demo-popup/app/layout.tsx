import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top One Percent — 99%ile GMAT & GRE",
  description: "Schedule a free demo session and reach the 99th percentile.",
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/ddcx08e0s/image/upload/v1781860633/1logo_xiniqt.png', sizes: '192x192', type: 'image/png' },
      { url: 'https://res.cloudinary.com/ddcx08e0s/image/upload/v1781860633/1logo_xiniqt.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: 'https://res.cloudinary.com/ddcx08e0s/image/upload/v1781860633/1logo_xiniqt.png',
    shortcut: 'https://res.cloudinary.com/ddcx08e0s/image/upload/v1781860633/1logo_xiniqt.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
