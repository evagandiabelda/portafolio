'use client';

import Habilidad from "@/components/ui/Habilidad";
import Boton from "@/components/buttons/Boton";

export default function SobreMi() {

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1>Sobre mí</h1>
                <p>Diseñadora gráfica de vocación, desarrolladora web por evolución. Tras más de 12 años dedicada a las Artes Gráficas, decidí ampliar horizontes y sumergirme en el universo digital.</p>
                <p>Me gusta cuidar cada detalle, desde el primer boceto hasta el último píxel. Disfruto combinando lo técnico con lo visual, lo funcional con lo estético.</p>
            </div>

            {/* Contenido */}

            <div className="w-3/4 px-[3rem] py-[5rem] flex flex-col gap-[2rem]">

                <h2 className="text-[var(--gris-claro)]">Eva Gandia Belda</h2>

                <div className="flex flex-col gap-[3rem]">

                    <table className="w-full border-collapse">
                        <tbody>
                            <Habilidad
                                icono="/icons/icono-edad.svg"
                                nombre="35 años"
                                descripcion="Responsabilidad, estabilidad y experiencia"
                                nivel=""
                            />
                            <Habilidad
                                icono="/icons/icono-pointer.svg"
                                nombre="Residencia"
                                descripcion="Ontinyent (Valencia)"
                                nivel=""
                            />
                            <Habilidad
                                icono="/icons/icono-coche.svg"
                                nombre="Movilidad"
                                descripcion="Carnet de conducir B"
                                nivel=""
                            />
                            <Habilidad
                                icono="/icons/icono-english.svg"
                                nombre="Inglés Técnico"
                                descripcion="Fluidez en inglés técnico, hablado y escrito"
                                nivel="Avanzado"
                            />
                        </tbody>
                    </table>

                </div>

                <div className="w-full flex justify-end items-center gap-[1rem] pt-[1rem]">
                    <Boton
                        texto="Ver Habilidades"
                        enlace="/habilidades"
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