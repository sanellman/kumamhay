import "./globals.css";
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
        <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
