'use client';

import { ReactNode, useEffect, useRef } from "react";

interface ProyectoProps {
    titulo: string;
    imagen1: string;
    descripcion: string;
    imagen2?: string;
    imagen3?: string;
    imagen4?: string;
    onClose: () => void;
}

export default function Proyecto({ titulo, imagen1, descripcion, imagen2, imagen3, imagen4, onClose }: ProyectoProps) {

    useEffect(() => {
        // Evitar scroll del fondo
        document.body.style.overflow = "hidden";

        // Restaurar al desmontar
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        // Cerrar con tecla Esc
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const imgClassname = "max-w-full max-h-[70vh] rounded-[12px]";

    return (
        <div className="fixed top-[0] left-[0] w-[100vw] h-[100vh] py-[3rem] bg-[rgba(0,0,0,0.8)] backdrop-blur-[4px] z-[9999] flex items-center justify-center">

            {/* Contenedor del contenido */}
            <div className="relative bg-[rgba(0,0,0,0.3)] p-[2rem] rounded-[20px] max-w-[90vw] max-h-[90vh] overflow-y-auto shadow-[0_0_20px_rgba(0,0,0,0.2)]">

                {/* Botón de cierre */}
                <div
                    onClick={onClose}
                    className="absolute top-[-0.6rem] right-[1rem] text-[4rem] text-[var(--gris-medio)] hover:text-[var(--gris-claro)] transition-colors duration-[200ms] cursor-pointer"
                    aria-label="Cerrar"
                >
                    ×
                </div>

                {/* CONTENIDO */}
                <div className="py-[2.2rem]">

                    <div className="w-full">
                        <h2 className="text-[var(--gris-medio)]">{titulo}</h2>
                        <p className="text-[var(--gris-medio)]">{descripcion}</p>
                    </div>

                    <div className="flex flex-col items-stretch gap-[1rem]">
                        <img src={imagen1} alt={titulo} className={imgClassname} />
                        {imagen2 && <img src={imagen2} alt={titulo} className={imgClassname} />}
                        {imagen3 && <img src={imagen3} alt={titulo} className={imgClassname} />}
                        {imagen4 && <img src={imagen4} alt={titulo} className={imgClassname} />}
                    </div>
                </div>

            </div>
        </div>
    );
}