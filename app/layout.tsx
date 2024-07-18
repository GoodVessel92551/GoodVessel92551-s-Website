import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GoodVessel92551",
  description: "GoodVessel92551's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
