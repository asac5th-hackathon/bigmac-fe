import Providers from "@/redux/Providers";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import Layout from "@/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bigmac",
  description: "bigmac project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BIGMAC-PROJECT</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
