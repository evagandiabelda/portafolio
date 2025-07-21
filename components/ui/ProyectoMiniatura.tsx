"use client";

import Image from "next/image";

interface ProyectoMiniaturaProps {
    imagen: string;
    titulo: string;
    onClick: () => void;
}

export default function ProyectoMiniatura({ imagen, titulo, onClick }: ProyectoMiniaturaProps) {
    return (
        <div
            className="relative aspect-[3/2] rounded-[26px] m-[2rem] shadow-[2px_6px_10px_rgba(0,0,0,0.25)] overflow-hidden group bg-cover bg-center cursor-pointer  grayscale hover:grayscale-0 transition-all duration-[0.3s] ease-in-out"
            style={{ backgroundImage: `url(${imagen})` }}
            onClick={onClick}
        >
            {/* Degradado al pasar el ratón */}
            <div className="thumbnail-overlay" />

            {/* Título sobre el degradado */}
            <div className="thumbnail-title">
                {titulo}
            </div>
        </div>
    );
};