'use client';

import Boton from "@/components/buttons/Boton";

export default function Formacion() {

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1>Formación</h1>
                <p>Aprender, desaprender y reaprender:</p>
                <p>En evolución constante, desde el diseño gráfico tradicional hasta las tecnologías más actuales en desarrollo web y diseño UX/UI.</p>
            </div>

            {/* Contenido */}

            <div className="w-3/4 px-[3rem] py-[5rem] flex flex-col gap-[2rem]">

                <h2 className="text-[var(--gris-claro)]">...</h2>

                <div className="flex flex-col gap-[3rem]">


                </div>

                <div className="w-full flex justify-end items-center gap-[1rem] pt-[1rem]">
                    <Boton
                        texto="Ver Trayectoria"
                        enlace="/trayectoria"
                        tamano="grande"
                        jerarquia="secundario"
                    />
                    <Boton
                        texto="Contacto"
                        enlace="/contacto"
                        tamano="grande"
                        jerarquia="primario"
                    />
                </div>

            </div>

        </div>
    );
}