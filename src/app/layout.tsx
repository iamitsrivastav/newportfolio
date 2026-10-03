import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export const metadata: Metadata = {
  title: "Amit Srivastav — Robotics · AI · STEM",
  description:
    "Robotics & STEM Trainer working at the intersection of AI, IoT, electronics, coding and hands-on technology education. Based in Prayagraj, India.",
  keywords: ["Robotics", "AI", "STEM", "IoT", "Python", "Trainer", "Amit Srivastav"],
  authors: [{ name: "Amit Srivastav" }],
  openGraph: {
    title: "Amit Srivastav — Robotics · AI · STEM",
    description: "Building technology. Teaching technology. Inspiring innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
