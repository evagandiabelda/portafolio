'use client';

import Image from "next/image";
import Habilidad from "@/components/other/Habilidad";

export default function SobreMi() {

    return (
        <div className="w-full flex">

            {/* Sidebar */}
            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)]">
                <h1>Sobre mí</h1>
                <p>Diseñadora gráfica de vocación, desarrolladora web por evolución. Tras más de 12 años dedicada a las Artes Gráficas, decidí ampliar horizontes y sumergirme en el universo digital.</p>
                <p>Me gusta cuidar cada detalle, desde el primer boceto hasta el último píxel. Disfruto combinando lo técnico con lo visual, lo funcional con lo estético.</p>
            </div>

            {/* Contenido */}
            <div className="w-3/4 px-[3rem] py-[5rem] flex flex-col gap-[2rem]">

                <h2 className="text-[var(--gris-claro)]">Diseñadora 360º</h2>

                <div className="flex flex-col gap-[3rem]">
                    {/* Habilidades de Desarrollo */}
                    <div className="p-[1rem] flex flex-col gap-[0.6rem]">

                        <h3>Habilidades de Desarrollo</h3>

                        <table className="w-full border-collapse">
                            <tbody>
                                <Habilidad
                                    icono="/icons/icono-figma.svg"
                                    nombre="Figma"
                                    descripcion="Diseño y prototipado de interfaces"
                                    nivel="Avanzado"
                                />
                                <Habilidad
                                    icono="/icons/icono-vscode.svg"
                                    nombre="Visual Studio Code"
                                    descripcion="Edición y depuración de código"
                                    nivel="Avanzado"
                                />
                            </tbody>
                        </table>

                    </div>

                    {/* Habilidades Gráficas */}
                    <div className="p-[1rem]">

                        <h3>Habilidades Gráficas</h3>

                        <p>...</p>
                    </div>

                    {/* Datos de interés */}
                    <div className="p-[1rem]">

                        <h3>Datos de interés</h3>

                        <p>...</p>
                    </div>
                </div>

            </div>

        </div>
    );
}