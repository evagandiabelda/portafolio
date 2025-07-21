'use client';

import Masonry from "react-masonry-css";
import ProyectoMiniatura from "@/components/ui/ProyectoMiniatura";
import Boton from "@/components/buttons/Boton";

export default function Proyectos() {

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
                    <ProyectoMiniatura
                        imagen="/imgs/proyectos/proyecto1.jpg"
                        titulo="Proyecto 1"
                    />
                    <ProyectoMiniatura
                        imagen="/imgs/proyectos/proyecto1.jpg"
                        titulo="Proyecto 2"
                    />
                    <ProyectoMiniatura
                        imagen="/imgs/proyectos/proyecto1.jpg"
                        titulo="Proyecto 3"
                    />
                    <ProyectoMiniatura
                        imagen="/imgs/proyectos/proyecto1.jpg"
                        titulo="Proyecto 4"
                    />
                    <ProyectoMiniatura
                        imagen="/imgs/proyectos/proyecto1.jpg"
                        titulo="Proyecto 5"
                    />
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