import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

export const metadata: Metadata = {
  title: "K Vaibhav — ML Engineer & AI Developer",
  description:
    "Portfolio of K Vaibhav — Machine Learning Engineer, AI Developer, and Software Engineering Student. Building intelligent systems with ML, AI, and scalable applications.",
  keywords: [
    "Machine Learning Engineer",
    "AI Developer",
    "K Vaibhav",
    "ML Portfolio",
    "Deep Learning",
    "NLP",
    "Python",
    "TensorFlow",
  ],
  authors: [{ name: "K Vaibhav" }],
  openGraph: {
    title: "K Vaibhav — ML Engineer & AI Developer",
    description:
      "Building intelligent systems with Machine Learning, AI, and scalable applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased bg-bg text-text font-body">
        <CustomCursor />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
