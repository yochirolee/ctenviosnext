"use client";
import Script from "next/script";

export default function GoogleAnalytics() {
	return (
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-DMGE29VG1R"
				strategy="afterInteractive"
				defer
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
				defer
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DMGE29VG1R');
        `,
				}}
			/>
		</>
	);
}
