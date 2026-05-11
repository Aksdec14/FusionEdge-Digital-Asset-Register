import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FusionEdge Digital Asset Register | Know Every Asset. Always.",
    template: "%s | FusionEdge",
  },
  description:
    "FusionEdge Digital Asset Register gives you a single, living record of every asset across every site. Always updated. Always accessible. Always audit-ready.",
  keywords: [
    "digital asset register",
    "facility asset management",
    "asset tracking software",
    "QR code asset tagging",
    "multi-site asset management",
    "facility management platform",
    "asset audit ready",
    "FusionEdge",
  ],
  authors: [{ name: "FusionEdge", url: "https://fusionedge.io" }],
  creator: "FusionEdge",
  metadataBase: new URL("https://fusionedge.io"),
  alternates: {
    canonical: "/digital-asset-register",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://fusionedge.io/digital-asset-register",
    siteName: "FusionEdge",
    title: "FusionEdge Digital Asset Register | Know Every Asset. Always.",
    description:
      "A single, living record of every asset across every site. Always updated. Always accessible. Always audit-ready. Built for facility managers who cannot afford to miss a thing.",
    images: [
      {
        url: "/FusionEdge_logo.png",
        width: 1200,
        height: 630,
        alt: "FusionEdge Digital Asset Register Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FusionEdge Digital Asset Register | Know Every Asset. Always.",
    description:
      "Stop managing assets on spreadsheets. FusionEdge gives you complete asset visibility across every site — audit-ready, always.",
    images: ["/FusionEdge_logo.png"],
    creator: "@fusionedge",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/FusionEdge_logo.png", type: "image/svg+xml" },
      { url: "/FusionEdge_logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/FusionEdge_logo.png",
    shortcut: "/FusionEdge_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/fe_logo.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "FusionEdge Digital Asset Register",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "A single, living record of every facility asset across every site. QR code tagging, document management, and multi-site portfolio management — built for facility managers.",
              offers: {
                "@type": "Offer",
                url: "https://fusionedge.io/digital-asset-register",
              },
              provider: {
                "@type": "Organization",
                name: "FusionEdge",
                url: "https://fusionedge.io",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  areaServed: ["IN", "SG"],
                },
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}