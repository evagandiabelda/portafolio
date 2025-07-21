"use client";

import Image from "next/image";

interface ProyectoMiniaturaProps {
    imagen: string;
    titulo: string;
}

export default function ProyectoMiniatura({ imagen, titulo }: ProyectoMiniaturaProps) {
    return (
        <div
            className="relative aspect-square rounded-[26px] m-[0.6rem] overflow-hidden group bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${imagen})` }}
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