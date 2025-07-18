'use client';

interface BotonProps {
    texto: string;
    enlace?: string;
    tamano: "pequeno" | "grande";
    jerarquia: "primario" | "secundario";
    onClick?: () => void;
    deshabilitado?: boolean;
    nuevaPestana?: boolean;
}

export default function Boton({ texto, enlace, tamano, jerarquia, onClick, deshabilitado, nuevaPestana }: BotonProps) {
    let className = "inline-block gap-4 text-center font-semibold rounded-full border-2 hover:scale-[1.02] transition ease duration-300 cursor-pointer ";
    let style: React.CSSProperties = {};

    if (tamano === "pequeno") {
        className += "a-boton-pq px-[1rem] py-[0.2rem] ";
    } else if (tamano === "grande") {
        className += "a-boton-gr px-[1.8rem] py-[0.4rem] ";
    }

    if (jerarquia === "primario") {
        className += "text-[var(--background)] border-[var(--foreground)] bg-[var(--foreground)] ";
    } else if (jerarquia === "secundario") {
        className += "text-[var(--foreground)] border-[var(--foreground)] ";
    }

    if (deshabilitado) {
        className += "opacity-50 cursor-not-allowed pointer-events-none ";
    } else {
        className += "cursor-pointer ";
    }

    return (
        <div className="inline-block">
            <a
                href={enlace}
                target={nuevaPestana ? "_blank" : "_self"}
                rel={nuevaPestana ? "noopener noreferrer" : undefined}
                className={className}
                style={style}
                onClick={onClick}>
                <div className="flex flex-row justify-center gap-4">
                    {texto}
                </div>
            </a>
        </div>
    );
};
