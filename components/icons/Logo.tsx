'use client';

type modo = {
    // Valores aceptados:
    modo?: "claro" | "oscuro";
};

export default function Logo({ modo }: modo) {

    /* COMPORTAMIENTO PERSONALIZADO: */

    if (modo === "claro") {
        return (
            <a href="/">
                <img
                    src="/logos/logo-2.svg"
                    alt="Logotipo"
                    className="w-full object-contain mx-auto" // Visible en modo claro
                />
            </a>

        );
    }

    if (modo === "oscuro") {
        return (
            <a href="/">
                <img
                    src="/logos/logo-2.svg"
                    alt="Logotipo en modo oscuro"
                    className="w-full object-contain mx-auto invert" // Visible en modo oscuro
                />
            </a>
        );
    }

};
