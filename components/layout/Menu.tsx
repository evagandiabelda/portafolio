'use client';

import Image from "next/image";

interface MenuProps {
    tipo: "normal" | "desplegable";
};

export default function Menu({ tipo }: MenuProps) {

    let navClassname = "";
    const divClassname = "py-[4px] hover:border-b hover:border-b-2 hover:border-[var(--brand)] cursor-pointer transition ease-in-out";

    if (tipo === "normal") {
        navClassname = "flex mobile:hidden laptop:flex items-center gap-[3rem]";
    }

    if (tipo === "desplegable") {
        navClassname = "mobile:flex laptop:hidden w-full flex-col gap-2";
    }

    return (
        <nav className={navClassname}>
            <div className={divClassname}>
                <a href="/sobre-mi">Sobre mí</a>
            </div>
            <div className={divClassname}>
                <a href="/formacion">Formación</a>
            </div>
            <div className={divClassname}>
                <a href="/trayectoria">Trayectoria</a>
            </div>
            <div className={divClassname}>
                <a href="/proyectos">Proyectos</a>
            </div>
            <div className={divClassname}>
                <a href="/contacto">Contacto</a>
            </div>
        </nav>
    );
};