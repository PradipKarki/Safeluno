export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192.png" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="apple-touch-startup-image" href="/icons/splash-640x1136.png" media="(device-width: 320px)" />
<link rel="apple-touch-startup-image" href="/icons/splash-750x1334.png" media="(device-width: 375px)" />
<link rel="apple-touch-startup-image" href="/icons/splash-1125x2436.png" media="(device-width: 375px) and (-webkit-device-pixel-ratio: 3)" />
<link rel="apple-touch-startup-image" href="/icons/splash-1242x2688.png" media="(device-width: 414px) and (-webkit-device-pixel-ratio: 3)" />
<link rel="apple-touch-startup-image" href="/icons/splash-1536x2048.png" media="(device-width: 768px)" />
<link rel="apple-touch-startup-image" href="/icons/splash-1668x2224.png" media="(device-width: 834px)" />
<link rel="apple-touch-startup-image" href="/icons/splash-2048x2732.png" media="(device-width: 1024px)" />
<meta name="theme-color" content="#0f172a" />
<link rel="icon" href="/icons/favicon.png" />
<link rel="shortcut icon" href="/icons/favicon.ico" />
<link rel="manifest" href="/manifest.json" />
<meta name="theme-color" content="#0f172a" />

      </head>
      <body>
        {children}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ("serviceWorker" in navigator) {
                navigator.serviceWorker.register("/sw.js");
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
