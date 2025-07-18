'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Habilidad from "@/components/other/Habilidad";

export default function SobreMi() {

    const triggerClassname = "border-none bg-[#ffffff] cursor-pointer hover:bg-[#e7e7e7] px-[1rem] py-[0.6rem] rounded-[0.6rem] transition-all duration-300 ease-in-out";

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1>Sobre mí</h1>
                <p>Diseñadora gráfica de vocación, desarrolladora web por evolución. Tras más de 12 años dedicada a las Artes Gráficas, decidí ampliar horizontes y sumergirme en el universo digital.</p>
                <p>Me gusta cuidar cada detalle, desde el primer boceto hasta el último píxel. Disfruto combinando lo técnico con lo visual, lo funcional con lo estético.</p>
            </div>

            {/* Contenido */}

            <div className="w-3/4 px-[3rem] py-[5rem] flex flex-col gap-[3rem]">

                <h2 className="text-[var(--gris-claro)]">Diseñadora 360º</h2>

                <div className="flex flex-col gap-[3rem]">

                    <Accordion type="single" collapsible className="w-full flex flex-col gap-[2rem]">

                        <AccordionItem value="item-1" className="w-full flex flex-col gap-[1rem]">

                            <AccordionTrigger className={triggerClassname}><h3>Habilidades de Desarrollo</h3></AccordionTrigger>

                            <AccordionContent className="px-[1rem]">

                                <table className="w-full border-collapse">
                                    <tbody>
                                        <Habilidad
                                            icono="/icons/icono-vscode.svg"
                                            nombre="Visual Studio Code"
                                            descripcion="Edición y depuración de código"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-github.svg"
                                            nombre="GitHub"
                                            descripcion="Control de versiones y colaboración"
                                            nivel="Alto"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-html.svg"
                                            nombre="HTML"
                                            descripcion="Estructuración de contenido web"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-css.svg"
                                            nombre="CSS"
                                            descripcion="Estilización de contenido web"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-tailwind.svg"
                                            nombre="Tailwind CSS"
                                            descripcion="Framework CSS para diseño responsivo"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-bootstrap.svg"
                                            nombre="Bootstrap"
                                            descripcion="Framework CSS para diseño responsivo"
                                            nivel="Medio"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-javascript.svg"
                                            nombre="JavaScript"
                                            descripcion="Programación y desarrollo web"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-java.svg"
                                            nombre="Java"
                                            descripcion="Programación orientada a objetos"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-php.svg"
                                            nombre="PHP"
                                            descripcion="Programación del lado del servidor"
                                            nivel="Básico"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-react.svg"
                                            nombre="React"
                                            descripcion="Componentización"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-nextjs.svg"
                                            nombre="Next.js"
                                            descripcion="Framework React para desarrollo"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-typescript.svg"
                                            nombre="TypeScript"
                                            descripcion="Tipado para JavaScript"
                                            nivel="Alto"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-docker.svg"
                                            nombre="Docker"
                                            descripcion="Contenerización"
                                            nivel="Básico"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-vercel.svg"
                                            nombre="Vercel"
                                            descripcion="Automatización de despliegues"
                                            nivel="Alto"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-node.svg"
                                            nombre="Node.js"
                                            descripcion="Entorno de ejecución para JavaScript en servidor"
                                            nivel="Medio"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-jenkins.svg"
                                            nombre="Jenkins"
                                            descripcion="Integración continua"
                                            nivel="Básico"
                                        />
                                    </tbody>
                                </table>

                            </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="item-2" className="w-full flex flex-col gap-[1rem]">

                            <AccordionTrigger className={triggerClassname}><h3>Habilidades Gráficas</h3></AccordionTrigger>

                            <AccordionContent className="px-[1rem]">

                                <table className="w-full border-collapse">
                                    <tbody>
                                        <Habilidad
                                            icono="/icons/icono-figma.svg"
                                            nombre="Figma"
                                            descripcion="Diseño y prototipado de interfaces"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-illustrator.svg"
                                            nombre="Illustrator"
                                            descripcion="Diseño e ilustración vectorial"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-indesign.svg"
                                            nombre="InDesign"
                                            descripcion="Maquetación de publicaciones"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-photoshop.svg"
                                            nombre="Photoshop"
                                            descripcion="Edición de fotografía"
                                            nivel="Alto"
                                        />
                                    </tbody>
                                </table>

                            </AccordionContent>

                        </AccordionItem>

                        <AccordionItem value="item-3" className="w-full flex flex-col gap-[1rem]">

                            <AccordionTrigger className={triggerClassname}><h3>Otros datos de interés</h3></AccordionTrigger>

                            <AccordionContent className="px-[1rem]">

                                <table className="w-full border-collapse">
                                    <tbody>
                                        <Habilidad
                                            icono="/icons/icono-edad.svg"
                                            nombre="35 años"
                                            descripcion="Responsabilidad, estabilidad y experiencia"
                                            nivel=""
                                        />
                                        <Habilidad
                                            icono="/icons/icono-english.svg"
                                            nombre="Inglés"
                                            descripcion="Fluidez en inglés técnico, hablado y escrito"
                                            nivel="Avanzado"
                                        />
                                        <Habilidad
                                            icono="/icons/icono-coche.svg"
                                            nombre="Movilidad"
                                            descripcion="Carnet de conducir B"
                                            nivel="17 años"
                                        />
                                    </tbody>
                                </table>

                            </AccordionContent>

                        </AccordionItem>

                    </Accordion>

                </div>

            </div>

        </div>
    );
}