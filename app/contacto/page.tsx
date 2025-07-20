'use client';

export default function Contacto() {

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 flex flex-col justify-start align-start gap-[2rem] px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1 className="text-[var(--gris-claro)]">Contacto</h1> {/* Oculto */}
                <h3>¿Te interesa mi perfil profesional?</h3>
                <p>Estaré encantada de que concertemos una entrevista.</p>
            </div>

            {/* Contenido */}

            <div className="w-3/4 py-[5rem] flex flex-col justify-start items-center gap-[2rem]">

                <div className="w-1/2">

                    <div>
                        <h2 className="text-[var(--gris-claro)]">Hablemos</h2>
                    </div>

                    <div className="flex flex-row justify-stretch items-stretch gap-[0.5rem]">

                        <div className="w-full bg-[var(--gris-claro)] rounded-[1rem]">
                            <p>...</p>
                        </div>

                        <div className="w-full bg-[var(--gris-claro)] rounded-[1rem]">
                            <p>...</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}