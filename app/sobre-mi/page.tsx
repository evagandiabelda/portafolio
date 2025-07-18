'use client';

export default function SobreMi() {

    return (
        <div className="w-full flex">

            {/* Sidebar */}
            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)]">
                <h1>Sobre mí</h1>
                <p>Diseñadora gráfica de vocación, desarrolladora web por evolución. Tras más de 12 años dedicada a las Artes Gráficas, decidí ampliar horizontes y sumergirme en el universo digital.</p>
                <p>Me gusta cuidar cada detalle, desde el primer boceto hasta el último píxel. Disfruto combinando lo técnico con lo visual, lo funcional con lo estético.</p>
            </div>

            {/* Contenido */}
            <div className="w-3/4 px-[3rem] py-[5rem]">

                <h2 className="text-[var(--gris-claro)]">Diseñadora 360º</h2>

                <div className="p-[1rem]">
                    <h3>Habilidades Digitales</h3>
                    <p>...</p>
                </div>

                <div className="p-[1rem]">
                    <h3>Habilidades Gráficas</h3>
                    <p>...</p>
                </div>

                <div className="p-[1rem]">
                    <h3>Otros aspectos</h3>
                    <p>...</p>
                </div>

            </div>

        </div>
    );
}