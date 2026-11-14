import localFont from "next/font/local";
import "./globals.css";
import "./template.css";
import "./refinements.css";
import "./theme.css";
import "./interactions.css";
import "./new-sections.css";
import "./service-program.css";
import "./footer.css";
import "./responsive.css";
import "./navigation.css";
import "./hero-reveal.css";
import NavbarLight from "@/components/NavbarLight";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/lib/lenis";
import PageTransition from "@/components/PageTransition";
import SiteEffects from "@/components/SiteEffects";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedBackground from "@/components/AnimatedBackground";
import SiteUpdateNotice from "@/components/SiteUpdateNotice";
const geistSans = localFont({
    src: "./fonts/geist-latin.woff2",
    variable: "--font-geist-sans",
    display: "swap",
    weight: "100 900",
    fallback: ["Arial", "sans-serif"],
});
const geistMono = localFont({
    src: "./fonts/geist-mono-latin.woff2",
    variable: "--font-geist-mono",
    display: "swap",
    weight: "100 900",
    fallback: ["Consolas", "monospace"],
    adjustFontFallback: false,
});
export const metadata = {
    title: {
        default: "Scitisense Futurize — AI Research & Technology",
        template: "%s | Scitisense Futurize",
    },
    description: "DPIIT-recognized AI Research & Product Development company delivering Computer Vision, IoT, NLP, Generative AI, and Agentic AI solutions.",
    keywords: [
        "Scientific R&D",
        "Medical IT",
        "healthcare technology",
        "AI research",
        "DPIIT recognized",
        "Startup India",
        "ITSM",
        "ITOM",
        "GRC",
        "SecOps",
        "enterprise IT",
        "digital transformation",
    ],
    authors: [{ name: "Scitisense Futurize" }],
    creator: "Scitisense Futurize",
    robots: { index: true, follow: true },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Scitisense Futurize — AI Research & Technology",
        description: "DPIIT-recognized AI Research & Product Development company delivering Computer Vision, IoT, NLP, Generative AI, and Agentic AI solutions.",
        siteName: "Scitisense Futurize",
    },
    twitter: {
        card: "summary_large_image",
        title: "Scitisense Futurize — AI Research & Technology",
        description: "DPIIT-recognized AI Research & Product Development company delivering Computer Vision, IoT, NLP, Generative AI, and Agentic AI solutions.",
    },
};
export const viewport = {
    themeColor: "#dbe9f0",
    colorScheme: "light",
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};
export default function RootLayout({ children, }) {
    return (<html lang="en" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen">
        <AnimatedBackground />
        {/* Inline script ensures smooth scroll before any JS hydrates */}
        <script dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.scrollBehavior = 'smooth';`,
        }}/>
        <SmoothScrollProvider>
          <NavbarLight />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScrollProvider>
        <SiteEffects />
        <WhatsAppButton />
        <SiteUpdateNotice />
      </body>
    </html>);
}
