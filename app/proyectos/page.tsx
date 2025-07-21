'use client';

import { useState, useEffect } from "react";
import { proyectos } from "@/data/proyectos";
import Image from "next/image";
import Masonry from "react-masonry-css";
import ProyectoMiniatura from "@/components/ui/ProyectoMiniatura";
import Proyecto from "@/components/ui/Proyecto";
import Boton from "@/components/buttons/Boton";

export default function Proyectos() {

    // Mezcla aleatoria del array solo una vez al montar
    const [proyectosAleatorios, setProyectosAleatorios] = useState(proyectos);
    useEffect(() => {
        const proyectosBarajados = [...proyectos].sort(() => Math.random() - 0.5);
        setProyectosAleatorios(proyectosBarajados);
    }, []);

    const [proyectoActivo, setProyectoActivo] = useState<number | null>(null);
    const [popupAbierto, setPopupAbierto] = useState(false);

    const abrirPopup = () => setPopupAbierto(true);
    const cerrarPopup = () => setPopupAbierto(false);

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1>Mis proyectos</h1>
                <p>Aquí encontrarás una muestra de los proyectos que he ido creando a lo largo de mi camino. Diseño gráfico, desarrollo web y mucho mimo detrás de cada uno.</p>
                <div className="pt-[2rem]">
                    <p>¿Crees que mi perfil es interesante para tu empresa?</p>
                    <Boton
                        texto="Hablemos"
                        enlace="/contacto"
                        tamano="grande"
                        jerarquia="primario"
                    />
                </div>
            </div>

            {/* Contenido */}

            <div className="w-3/4 px-[3rem] py-[5rem] flex flex-col gap-[5rem]">

                <div className="flex flex-col gap-[3rem]">

                    <h3>Proyectos destacados</h3>

                    <table className="w-full border-collapse">
                        <tbody>
                            <tr className="border-y border-y-1 border-[var(--gris-claro)]">
                                <td className="w-[160px] px-[1rem] py-[1rem] align-middle">
                                    <a href="https://spiced-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src='/imgs/proyectos/Spiced/img1.jpg'
                                            alt={`Miniatura del proyecto Spiced`}
                                            width={120}
                                            height={80}
                                            className="object-cover rounded-[20px] hover:scale-[1.05] transition-transform duration-[0.3s] ease-in-out"
                                        />
                                    </a>
                                </td>
                                <td className="px-[0.2rem] py-[1rem]">
                                    <strong>Spiced</strong>
                                </td>
                                <td className="px-[0.2rem] py-[1rem]">
                                    Aplicación web (proyecto final DAW)
                                </td>
                                <td className="px-[0.2rem] py-[1rem] align-middle">
                                    <div className="flex flex-row justify-center items-center gap-[2rem]">
                                        <a href="https://www.figma.com/design/ca0OBF9ReLe7KEcQZzvoMv/Spiced" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src='/icons/icono-figma.svg'
                                                alt={`Ver prototipado en Figma`}
                                                width={30}
                                                height={30}
                                                className="object-contain hover:scale-[1.1] transition-transform duration-[0.3s] ease-in-out"
                                            />
                                        </a>
                                        <a href="https://github.com/evagandiabelda/spiced" target="_blank" rel="noopener noreferrer">
                                            <Image
                                                src='/icons/icono-github.svg'
                                                alt={`Ver repositorio en GitHub`}
                                                width={30}
                                                height={30}
                                                className="object-contain hover:scale-[1.1] transition-transform duration-[0.3s] ease-in-out"
                                            />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>

                <div className="flex flex-col gap-[3rem]">

                    <h3>Otros proyectos</h3>

                    <Masonry
                        breakpointCols={{
                            default: 3, // Ordenadores grandes
                            1600: 3, // Ordenadores pequeños
                            1024: 3, // Tablets
                            768: 2, // Móviles grandes
                            500: 1, // Móviles pequeños
                        }}
                        className="w-full flex"
                        columnClassName="masonry-column"
                    >

                        {proyectosAleatorios.map((proyecto, index) => (
                            <div key={index}>
                                {/* Miniatura */}
                                <ProyectoMiniatura
                                    imagen={proyecto.imagenes[0]}
                                    titulo={proyecto.titulo}
                                    onClick={() => {
                                        setProyectoActivo(index);
                                        abrirPopup();
                                    }}
                                />

                                {/* Popup solo si es el proyecto activo */}
                                {proyectoActivo === index && popupAbierto && (
                                    <Proyecto
                                        titulo={proyecto.titulo}
                                        descripcion={proyecto.descripcion}
                                        imagenes={proyecto.imagenes}
                                        onClose={cerrarPopup}
                                    />
                                )}
                            </div>
                        ))}
                    </Masonry>

                </div>

            </div>

        </div>
    );
}