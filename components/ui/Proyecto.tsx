'use client';

import { ReactNode } from "react";

interface ProyectoProps {
    children: ReactNode;
    onClose: () => void;
}

export default function Proyecto({ children, onClose }: ProyectoProps) {
    return (
        <div className="fixed top-[0] left-[0] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] z-[9999] flex items-center justify-center">
            {/* Contenedor del contenido */}
            <div className="relative bg-white p-[2rem] rounded-[20px] max-w-[90vw] max-h-[90vh] overflow-auto shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                {/* Botón de cierre */}
                <div
                    onClick={onClose}
                    className="absolute top-[-0.6rem] right-[1rem] text-[4rem] text-black hover:text-[rgba(0,0,0,0.6)] transition-colors duration-[200ms] cursor-pointer"
                    aria-label="Cerrar"
                >
                    ×
                </div>

                <div className="pt-[2.2rem]">
                    {children}
                </div>
            </div>
        </div>
    );
}