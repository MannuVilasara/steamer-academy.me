import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Partytown } from "@builder.io/partytown/react";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";

const GoogleAnalytics = dynamic(() => import("@/components/GoogleAnalytics"), {
	ssr: false,
});

export const metadata: Metadata = {
	title: "STEAMer Academy",
	description: "STEAMer Academy Main Home Page",
	icons: {
		icon: "/favicon.png",
		apple: "/favicon.png",
	},
	manifest: "/manifest.json",
};

export const viewport: Viewport = {
	width: "device-width",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#c0caf5" },
		{ media: "(prefers-color-scheme: dark)", color: "#1f2335" },
	],
};

const geistSans = localFont({
	src: "../app/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "../app/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://www.google-analytics.com" />
				<link rel="preconnect" href="https://www.googletagmanager.com" />
				<Partytown debug={true} forward={["dataLayer.push"]} />
				<GoogleAnalytics />
				<Script id="next-pwa">
					{` 
          if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js')
          else console.warning("Ups, your navigator doesn't support service worker, offline feature wont work, update your browser or chose other modern browser")
        `}
				</Script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} text-center antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
