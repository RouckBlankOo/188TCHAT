import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "188TCHAT - Private Messaging App",
  description:
    "A secure messaging platform with end-to-end encryption, self-destructing messages, and private calls.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-black text-white antialiased"}>{children}</body>
    </html>
  );
}
