'use client';

import Image from "next/image";
import Formulario from "@/components/ui/Formulario";

export default function Contacto() {

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 flex flex-col justify-start align-start gap-[2rem] px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1 className="hidden">Contacto</h1> {/* Oculto */}

                <h3>¿Te interesa mi perfil profesional?</h3>
                <p>Estaré encantada de que concertemos una entrevista.</p>
            </div>

            {/* Contenido */}

            <div className="w-3/4 py-[5rem] flex flex-col justify-start items-center gap-[2rem]">

                <div className="w-2/3">

                    <div>
                        <h2 className="text-[var(--gris-medio)]">Hablemos</h2>
                    </div>

                    <div className="flex flex-row justify-stretch items-stretch gap-[3rem]">

                        {/* CARD TEL */}
                        <a href="tel:+34660201670">
                            <div className="w-full flex flex-row justify-start items-center gap-[1.6rem] bg-[var(--brand)] rounded-full shadow-[2px_6px_20px_rgba(0,0,0,0.25)] p-[0.6rem] hover:scale-[1.02] hover:opacity-[0.9] transition ease duration-300 cursor-pointer">
                                <Image
                                    src="/icons/icono-tel.svg"
                                    alt="Icono Teléfono"
                                    width={36}
                                    height={36}
                                    className="opacity-[0.5]"
                                />
                                <p className="text-[1.1rem] text-[var(--background)] font-[600] m-[0px] pr-[1.6rem] opacity-[0.9]">(+34) 660 201 670</p>
                            </div>
                        </a>

                        {/* CARD EMAIL */}
                        <a href="mailto:evagandiabelda@gmail.com">
                            <div className="w-full flex flex-row justify-start items-center gap-[1.6rem] bg-[var(--brand)] rounded-full shadow-[2px_6px_20px_rgba(0,0,0,0.25)] p-[0.6rem] hover:scale-[1.02] hover:opacity-[0.9] transition ease duration-300 cursor-pointer">
                                <Image
                                    src="/icons/icono-email.svg"
                                    alt="Icono Email"
                                    width={36}
                                    height={36}
                                    className="opacity-[0.5]"
                                />
                                <p className="text-[1.1rem] text-[var(--background)] font-[600] m-[0px] pr-[1.6rem] opacity-[0.9]">evagandiabelda@gmail.com</p>
                            </div>
                        </a>

                    </div>

                    <div className="mt-[4rem]">

                        <p className="p-[0.6rem]">O puedes enviarme un mensaje:</p>

                        <Formulario />

                    </div>

                </div>

            </div>

        </div>
    );
}