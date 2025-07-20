import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: '%s | Eva Gandia',
    default: 'Eva Gandia',
  },
  description: "Soy Eva, desarrolladora web, diseñadora UX/UI y diseñadora gráfica. Aquí podrás conocer mis proyectos y habilidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es">

      <body className="antialiased min-h-screen m-0">
        <Header />
        <main className="flex flex-grow">
          {children}
          <Toaster position="bottom-right" />
        </main>
        <Footer />
      </body>

    </html>
  );
}
