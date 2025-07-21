import type { Metadata } from "next";
import "./globals.css";
import BloqueoClickDerechoImagen from "@/lib/BloqueoClickDchoImg";
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

        <BloqueoClickDerechoImagen />

        {/* Versión móvil (temporal) */}

        <div className="mobile-only min-h-screen flex flex-col items-center justify-center px-[4rem] text-center">
          <p className="text-[1.4rem] font-[600]">La versión responsive de esta web está en construcción.</p>
          <p>Por el momento, puedes verla desde tu ordenador.</p>
          <p>¡Gracias por tu comprensión!</p>
        </div>

        {/* Versión de escritorio */}

        <div className="desktop-only">
          <Header />
          <main className="flex flex-grow">
            {children}
            <Toaster position="bottom-right" />
          </main>
          <Footer />
        </div>

      </body>

    </html>
  );
}
