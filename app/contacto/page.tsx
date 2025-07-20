'use client';

import Image from "next/image";

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

                    <div className="flex flex-row justify-stretch items-stretch gap-[1.5rem]">

                        {/* CARD TEL */}
                        <div className="flex flex-row justify-start items-center gap-[1.6rem] bg-[#E8C6B2] rounded-full p-[0.6rem] hover:scale-[1.02] transition ease duration-300 cursor-pointer">
                            <Image
                                src="/icons/icono-tel.svg"
                                alt="Icono Teléfono"
                                width={36}
                                height={36}
                            />
                            <p className="text-[1.1rem] font-[600] m-[0px] pr-[1.6rem]">(+34) 660 201 670</p>
                        </div>

                        {/* CARD EMAIL */}
                        <div className="flex flex-row justify-start items-center gap-[1.6rem] bg-[#E8C6B2] rounded-full p-[0.6rem] hover:scale-[1.02] transition ease duration-300 cursor-pointer">
                            <Image
                                src="/icons/icono-email.svg"
                                alt="Icono Email"
                                width={36}
                                height={36}
                            />
                            <p className="text-[1.1rem] font-[600] m-[0px] pr-[1.6rem]">evagandiabelda@gmail.com</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}