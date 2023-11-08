import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

export const dynamic = "force-dynamic";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "African Fabric and Designs | Dashboard",
  description: "This is the dashboard of the African Fabric and Designs. Kenya Ltd.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
