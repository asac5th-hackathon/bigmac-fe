import Providers from "@/redux/Providers";
import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BIGMAC-PROJECT</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <Providers>
          <div id="root">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
