"use client";

import Image from "next/image";

interface HabilidadProps {
    icono: string;
    nombre: string;
    descripcion: string;
    nivel: string;
}

export default function Habilidad({ icono, nombre, descripcion, nivel }: HabilidadProps) {
    return (
        <tr className="border-y border-y-1 border-[var(--gris-claro)]">
            <td className="px-[1rem] py-[1rem] align-middle">
                <Image
                    src={icono}
                    alt={`Logo ${nombre}`}
                    width={30}
                    height={30}
                />
            </td>
            <td className="px-[0.2rem] py-[1rem] align-middle">
                <strong>{nombre}</strong>
            </td>
            <td className="px-[0.2rem] py-[1rem] align-middle">
                {descripcion}
            </td>
            <td className="px-[0.2rem] py-[1rem] align-middle">
                {nivel}
            </td>
        </tr>
    );
};