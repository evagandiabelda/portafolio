'use client';

import Boton from "@/components/buttons/Boton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center px-[3rem] text-center mx-auto">

      {/* Hero Banner */}
      <div className="w-full h-full flex justify-start items-center text-left bg-[url('/imgs/hero-banner-fondo.webp')] bg-cover bg-center px-[3rem] py-[1rem] no-repeat bg-fixed relative">

        <div className="w-full h-full flex flex-row justify-center items-center gap-[2em] px-[8rem] py-[2rem]">

          {/* TEXTOS */}

          <div className="w-full flex flex-row justify-center items-center">

            <div className="flex flex-col justify-center items-start gap-[2rem]">

              {/* Introducción */}
              <div>
                <h2>Eva Gandia Belda</h2>
                <p>Desarrolladora web, diseñadora UX/UI y diseñadora gráfica.<br />
                  Formada en las últimas tecnologías de desarrollo web.<br />
                  +12 años de experiencia en producción gráfica y medios impresos.</p>
              </div>

              {/* Botones */}
              <div className="flex justify-start items-center gap-[1rem]">
                <Boton
                  texto="Ver proyectos"
                  enlace="/proyectos"
                  tamano="grande"
                  jerarquia="secundario"
                />
                <Boton
                  texto="Hablemos"
                  enlace="/contacto"
                  tamano="grande"
                  jerarquia="primario"
                />
              </div>

            </div>

          </div>

          {/* IMAGEN */}

          <div className="w-full px-[6rem]">
            <Image
              src="/imgs/hero-banner-figura.webp"
              alt="Imagen de la página de inicio"
              layout="responsive"
              width={200}
              height={200}
              className="object-contain h-full"
            />
          </div>

        </div>

      </div>

    </div>
  );
}
