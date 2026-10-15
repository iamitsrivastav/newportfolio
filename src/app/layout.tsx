import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
});

const siteUrl = "https://iamitsrivastav.github.io/newportfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amit Srivastav — Robotics, AI & STEM Educator",
    template: "%s | Amit Srivastav",
  },
  description:
    "Robotics & STEM Trainer specialising in AI, IoT, electronics, Python, and hands-on technology education. Based in Prayagraj, India. Currently at CareCubs.",
  keywords: [
    "Robotics Trainer","STEM Education","AI","IoT","Python","OpenCV",
    "Arduino","Computer Vision","Curriculum Design","Amit Srivastav",
    "Prayagraj","Educational Technology",
  ],
  authors: [{ name: "Amit Srivastav", url: siteUrl }],
  creator: "Amit Srivastav",

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Amit Srivastav",
    title: "Amit Srivastav — Robotics, AI & STEM Educator",
    description:
      "Building technology. Teaching technology. Inspiring innovation. Robotics & STEM Trainer based in Prayagraj, India.",
    images: [
      {
        url: "/images/amit-portrait.jpg",
        width: 800,
        height: 1067,
        alt: "Amit Srivastav — Robotics and STEM Trainer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amit Srivastav — Robotics, AI & STEM Educator",
    description:
      "Building technology. Teaching technology. Inspiring innovation.",
    images: ["/images/amit-portrait.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      {/*
        Explicit <head> additions handled via metadata above.
        Viewport and charSet are injected automatically by Next.js.
      */}
      <body>
        {/* Skip-to-content link — CSS-only, no JS needed */}
        <a href="#home" className="skip-link">
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
