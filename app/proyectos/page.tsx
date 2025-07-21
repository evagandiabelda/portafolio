'use client';

import { useState } from "react";
import { proyectos } from "@/data/proyectos";
import Masonry from "react-masonry-css";
import ProyectoMiniatura from "@/components/ui/ProyectoMiniatura";
import Proyecto from "@/components/ui/Proyecto";
import Boton from "@/components/buttons/Boton";

export default function Proyectos() {

    const [proyectoActivo, setProyectoActivo] = useState<number | null>(null);
    const [popupAbierto, setPopupAbierto] = useState(false);

    const abrirPopup = () => setPopupAbierto(true);
    const cerrarPopup = () => setPopupAbierto(false);

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1>Mis proyectos</h1>
                <p>...</p>
            </div>

            {/* Contenido */}

            <div className="w-3/4 px-[3rem] py-[5rem] flex flex-col gap-[2rem]">

                <Masonry
                    breakpointCols={{
                        default: 5, // Ordenadores grandes
                        1600: 4, // Ordenadores pequeños
                        1024: 3, // Tablets
                        768: 2, // Móviles grandes
                        500: 1, // Móviles pequeños
                    }}
                    className="w-full flex"
                    columnClassName="masonry-column"
                >

                    {proyectos.map((proyecto, index) => (
                        <div key={index}>
                            {/* Miniatura */}
                            <ProyectoMiniatura
                                imagen={proyecto.imagen}
                                titulo={proyecto.titulo}
                                onClick={() => {
                                    setProyectoActivo(index);
                                    abrirPopup();
                                }}
                            />

                            {/* Popup solo si es el proyecto activo */}
                            {proyectoActivo === index && popupAbierto && (
                                <Proyecto onClose={cerrarPopup}>
                                    <img
                                        src="/imgs/proyectos/proyecto1.jpg"
                                        alt="Proyecto"
                                        className="max-w-full max-h-[70vh] rounded-[12px]"
                                    />
                                </Proyecto>
                            )}
                        </div>
                    ))}
                </Masonry>

                <div className="w-full flex justify-end items-center gap-[1rem] pt-[1rem]">
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