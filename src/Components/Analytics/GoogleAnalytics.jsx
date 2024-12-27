"use client";
import Script from "next/script";

export default function GoogleAnalytics() {
	return (
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=AW-11165948511"
				strategy="afterInteractive"
				defer
			/>
			<Script id="google-analytics" strategy="afterInteractive" defer>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11165948511');
        `}
			</Script>
		</>
	);
}
