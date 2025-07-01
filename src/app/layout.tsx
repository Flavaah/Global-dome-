import "../globals.css";
import { ReactNode } from "react";
import Head from "next/head";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv">
      <Head>
        <title>Global Dome</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f3f2c" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
