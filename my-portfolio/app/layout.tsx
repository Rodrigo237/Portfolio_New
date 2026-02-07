import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Rodrigo Portfolio",
  description: "Landing page con Next.js y Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
          <main className="flex-1 p-0 m-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
