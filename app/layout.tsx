import type { Metadata, Viewport } from "next";
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

// 1. Modern Viewport Export (Next.js 14/15 Standard)
export const viewport: Viewport = {
  themeColor: "#EFE9E3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fusionedge.io"),

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
    "FusionEdge",
  ],

  authors: [{ name: "FusionEdge", url: "https://fusionedge.io" }],
  creator: "FusionEdge",

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
      "A single, living record of every asset across every site. Built for facility managers who cannot afford to miss a thing.",
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
    description: "Stop managing assets on spreadsheets. FusionEdge gives you complete asset visibility across every site.",
    images: ["/FusionEdge_logo.png"],
    creator: "@fusionedge",
  },

  // 2. Metadata-driven Icons (Unified and Cleaned)
  icons: {
    icon: [
      { url: "/fe_logo.png" }, // Favicon
      { url: "/fe_logo.png", type: "image/svg+xml" }, // SVG version
    ],
    apple: "/fe_logo.png",
    shortcut: "/fe_logo.png",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 3. Structured Data (Graph format for better SEO connectivity)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://fusionedge.io/digital-asset-register/#software",
        "name": "FusionEdge Digital Asset Register",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "A single, living record of every facility asset across every site with QR code tagging and document management.",
        "url": "https://fusionedge.io/digital-asset-register",
        "offers": {
          "@type": "Offer",
          "url": "https://fusionedge.io/digital-asset-register",
          "priceCurrency": "USD",
        },
        "provider": {
          "@type": "Organization",
          "name": "FusionEdge",
          "url": "https://fusionedge.io",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "areaServed": ["IN", "SG"],
          },
        },
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Manual head link removed; metadata icons handle it now. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#EFE9E3] text-[#1e2a38] flex flex-col overflow-x-hidden">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}