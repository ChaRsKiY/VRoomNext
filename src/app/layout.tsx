import type { Metadata } from "next";
import "../styles/globals.css";
import {
    ClerkProvider,
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "VRoom",
  description: "VRoom Platform"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
      </ClerkProvider>
  );
}
