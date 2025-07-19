'use client';

import Boton from "@/components/buttons/Boton";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center px-[3rem] text-center mx-auto">

      {/* Hero Banner */}
      <div className="w-full aspect-[18/7] flex flex-grow justify-start items-center text-left bg-[url('/imgs/banner-home.webp')] bg-cover bg-center p-[3rem]">

        <div className="w-1/2 flex flex-col gap-[2rem] pl-[7rem]">
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

    </div>
  );
}
