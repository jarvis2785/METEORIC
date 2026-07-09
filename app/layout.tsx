import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:2786"),
  title: "Meteoric Boost — We Build the Top 0.1% Personal Brands",
  description:
    "The protocol behind founder brands that convert. 20+ founders scaled, $100k+ closed by clients, millions of organic views. Apply to work with Moksh Vasant.",
  openGraph: {
    title: "Meteoric Boost — We Build the Top 0.1% Personal Brands",
    description:
      "The protocol behind founder brands that convert. 20+ founders scaled, $100k+ closed by clients, millions of organic views. Apply to work with Moksh Vasant.",
    images: ["/images/meteoric-logo.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="bg-ink font-body text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}
