'use client';

import { useEffect } from "react";

interface ProyectoProps {
    titulo: string;
    descripcion: string;
    imagenes: string[];
    onClose: () => void;
}

export default function Proyecto({ titulo, descripcion, imagenes, onClose }: ProyectoProps) {

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

    const imgClassname = "max-w-full rounded-[12px]";

    return (
        <div className="fixed top-[0] left-[0] w-[100vw] py-[3rem] bg-[rgba(0,0,0,0.8)] backdrop-blur-[4px] z-[9999] flex items-center justify-center">

            {/* Botón de cierre */}
            <div
                onClick={onClose}
                className="absolute top-[-0.6rem] right-[1rem] text-[4rem] text-[var(--gris-medio)] hover:text-[var(--gris-claro)] transition-colors duration-[200ms] cursor-pointer"
                aria-label="Cerrar"
            >
                ×
            </div>

            {/* Contenedor del contenido */}
            <div className="relative bg-[rgba(0,0,0,0.3)] p-[2rem] rounded-[20px] max-w-[90vw] max-h-[80vh] overflow-y-auto shadow-[0_0_20px_rgba(0,0,0,0.2)]">

                {/* CONTENIDO */}
                <div className="py-[2.2rem]">

                    <div className="w-full">
                        <h2 className="text-[var(--gris-medio)]">{titulo}</h2>
                        <p className="text-[var(--gris-medio)]">{descripcion}</p>
                    </div>

                    <div className="flex flex-col items-center gap-[1rem]">
                        {imagenes.map((img, idx) => (
                            <img key={idx} src={img} alt={`${titulo} imagen ${idx + 1}`} className={imgClassname} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}