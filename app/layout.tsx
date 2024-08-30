import "@aws-amplify/ui-react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import ConfigureAmplifyClientSide from "@/components/ConfigureAmplify";

export const metadata: Metadata = {
  title: "Kahut",
  description: "Kahut is an interactive quiz app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigureAmplifyClientSide />
        {children}
      </body>
    </html>
  );
}
