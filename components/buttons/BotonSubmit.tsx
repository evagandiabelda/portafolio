"use client";

import Image from "next/image";

interface BotonSubmitProps {
    texto: string;
    disabled?: boolean;
    icon?: string;
}

export default function BotonSubmit({ texto, disabled = false, icon }: BotonSubmitProps) {

    return (
        <button
            type="submit"
            className="inline-block gap-4 text-center font-semibold rounded-full border-2 hover:scale-[1.02] transition ease duration-300 cursor-pointer a-boton-gr px-[1.8rem] py-[0.4rem] text-[var(--background)] border-[var(--foreground)] bg-[var(--foreground)] "
            disabled={disabled}
        >
            {texto}
            {icon && <Image src={icon} alt="icono" width={15} height={15} className="invert dark:filter-none" />}
        </button>
    );

}