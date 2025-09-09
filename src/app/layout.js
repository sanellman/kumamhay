import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import SiteHeader from "./components/site-header";

export const metadata = {
  title: "kumamhay",
  description: "Kuma fan site — Game Zone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-black text-white antialiased">
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-4 md:px-6 py-2">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
