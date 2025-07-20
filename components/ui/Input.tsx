'use client';

import { ChangeEvent } from "react";
import Image from "next/image";

type InputProps = {
    tipo: "text" | "email" | "textarea";
    icon?: boolean;
    customIcon?: string;
    id: string;
    placeholder?: string | "";
    rows?: number;
    value?: string;
    required: boolean;
}

export default function Input({ tipo, icon, customIcon, id, placeholder, rows, value, required }: InputProps) {

    const divClassName = "flex flex-row justify-between items-center gap-3 px-4 py-1 rounded-[12px] bg-white dark:bg-[var(--gris4)] cursor-text";
    const inputClassName = "flex-1 text-[1rem] !bg-transparent py-1 px-2 focus:outline-none active:outline-none cursor-text placeholder-light dark:placeholder-dark ";

    if (tipo === "text") {
        return (
            <div className={divClassName}>
                {/* La imagen solo se muestra si 'icon' es true: */}
                {icon && (
                    <Image
                        src={customIcon ? customIcon : "/iconos/iconos-registro/icono-registro-nombre.svg"}
                        width={18}
                        height={18}
                        className="dark:invert"
                        alt="campo de texto"
                    />
                )}
                <input
                    type="text"
                    id={id}
                    name={id}
                    value={value}
                    className={inputClassName}
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        );
    }
    else if (tipo === "email") {
        return (
            <div className={divClassName}>
                {/* La imagen solo se muestra si 'icon' es true: */}
                {icon && (
                    <Image
                        src={customIcon ? customIcon : "/iconos/iconos-registro/icono-registro-email.svg"}
                        width={18}
                        height={18}
                        className="dark:invert"
                        alt="campo email"
                    />
                )}
                <input
                    type="email"
                    id={id}
                    name={id}
                    value={value}
                    className={inputClassName}
                    placeholder={placeholder}
                    required={required}
                />
            </div>
        );
    }
    else if (tipo === "textarea") {

        return (
            <div className={divClassName + " py-4"}>
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    className={inputClassName}
                    placeholder={placeholder}
                    required={required}
                    rows={rows}
                />
            </div>
        );
    }

};