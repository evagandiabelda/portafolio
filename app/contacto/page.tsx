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
                        <div className="flex flex-row justify-start items-center gap-[1.6rem] bg-[var(--brand)] rounded-full shadow-[2px_6px_20px_rgba(0,0,0,0.25)] p-[0.6rem] hover:scale-[1.02] hover:opacity-[0.9] transition ease duration-300 cursor-pointer">
                            <Image
                                src="/icons/icono-tel.svg"
                                alt="Icono Teléfono"
                                width={36}
                                height={36}
                                className="opacity-[0.5]"
                            />
                            <p className="text-[1.1rem] text-[var(--background)] font-[600] m-[0px] pr-[1.6rem] opacity-[0.9]">(+34) 660 201 670</p>
                        </div>

                        {/* CARD EMAIL */}
                        <div className="flex flex-row justify-start items-center gap-[1.6rem] bg-[var(--brand)] rounded-full shadow-[2px_6px_20px_rgba(0,0,0,0.25)] p-[0.6rem] hover:scale-[1.02] hover:opacity-[0.9] transition ease duration-300 cursor-pointer">
                            <Image
                                src="/icons/icono-email.svg"
                                alt="Icono Email"
                                width={36}
                                height={36}
                                className="opacity-[0.5]"
                            />
                            <p className="text-[1.1rem] text-[var(--background)] font-[600] m-[0px] pr-[1.6rem] opacity-[0.9]">evagandiabelda@gmail.com</p>
                        </div>

                    </div>

                    <div className="mt-[3rem]">

                        <p>O puedes enviarme un mensaje:</p>

                        <form className="flex flex-col gap-[1.5rem] p-[1.5rem] bg-[#fff] rounded-[30px] shadow-[2px_6px_20px_rgba(0,0,0,0.25)]">

                            <input
                                type="text"
                                placeholder="Nombre"
                                className="w-full p-[0.8rem] rounded-full bg-[var(--gris-claro)] border-[1px] border-[var(--gris-medio)] focus:outline-none focus:border-[var(--brand)] transition ease duration-300"
                            />

                            <input
                                type="text"
                                placeholder="Empresa"
                                className="w-full p-[0.8rem] rounded-full bg-[var(--gris-claro)] border-[1px] border-[var(--gris-medio)] focus:outline-none focus:border-[var(--brand)] transition ease duration-300"
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-[0.8rem] rounded-full bg-[var(--gris-claro)] border-[1px] border-[var(--gris-medio)] focus:outline-none focus:border-[var(--brand)] transition ease duration-300"
                            />

                            <textarea
                                placeholder="Mensaje"
                                className="w-full p-[0.8rem] rounded-lg bg-[var(--gris-claro)] border-[1px] border-[var(--gris-medio)] focus:outline-none focus:border-[var(--brand)] transition ease duration-300 h-[10rem]"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full py-[0.8rem] bg-[var(--brand)] text-white rounded-full hover:opacity-90 transition ease duration-300"
                            >
                                Enviar
                            </button>
                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}