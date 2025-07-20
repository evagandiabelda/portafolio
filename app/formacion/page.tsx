'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';

import Boton from "@/components/buttons/Boton";

export default function Formacion() {

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1>Formación</h1>
                <p>Aprender, desaprender y reaprender:</p>
                <p>En evolución constante, desde el diseño gráfico tradicional hasta las tecnologías más actuales en desarrollo web y diseño UX/UI.</p>
            </div>

            {/* Contenido */}

            <div className="w-3/4 px-[3rem] py-[5rem] flex flex-col gap-[2rem]">

                <div className="flex flex-col gap-[3rem]">

                    {/* TIMELINE */}

                    <VerticalTimeline layout={'1-column-left'} lineColor={'var(--gris-claro)'}>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#fff', color: '#fff', borderRadius: '30px', boxShadow: '5px 5px 20px rgba(0,0,0,0.1)' }}
                            contentArrowStyle={{ borderRight: '7px solid #fff', marginTop: '10px' }}
                            iconStyle={{ background: 'var(--brand)', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <p className='text-[var(--gris-oscuro)] px-[1rem] pb-[2rem]'>2022 - actualidad</p>
                            <h3 className="vertical-timeline-element-title px-[1rem] pb-[1rem] text-[var(--gris-oscuro)]">Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Web</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#b2b2b2] px-[1rem] py-[0.5rem]">IES L'Estació (Ontinyent)</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#fff', color: '#fff', borderRadius: '30px', boxShadow: '5px 5px 20px rgba(0,0,0,0.1)' }}
                            contentArrowStyle={{ borderRight: '7px solid #fff', marginTop: '10px' }}
                            iconStyle={{ background: 'var(--brand)', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <p className='text-[var(--gris-oscuro)] px-[1rem] pb-[2rem]'>2008 - 2011</p>
                            <h3 className="vertical-timeline-element-title px-[1rem] pb-[1rem] text-[var(--gris-oscuro)]">Licenciatura en Publicidad y Relaciones Públicas</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#b2b2b2] px-[1rem] py-[0.5rem]">Universitat d'Alacant</h4>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#fff', color: '#fff', borderRadius: '30px', boxShadow: '5px 5px 20px rgba(0,0,0,0.1)' }}
                            contentArrowStyle={{ borderRight: '7px solid #fff', marginTop: '10px' }}
                            iconStyle={{ background: 'var(--brand)', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <p className='text-[var(--gris-oscuro)] px-[1rem] pb-[2rem]'>2005 - 2007</p>
                            <h3 className="vertical-timeline-element-title px-[1rem] pb-[1rem] text-[var(--gris-oscuro)]">Bachillerato de Artes</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#b2b2b2] px-[1rem] py-[0.5rem]">IES L'Estació (Ontinyent)</h4>
                        </VerticalTimelineElement>

                    </VerticalTimeline>

                </div>

                <div className="w-full flex justify-end items-center gap-[1rem] pt-[1rem]">
                    <Boton
                        texto="Ver Trayectoria"
                        enlace="/trayectoria"
                        tamano="grande"
                        jerarquia="secundario"
                    />
                    <Boton
                        texto="Contacto"
                        enlace="/contacto"
                        tamano="grande"
                        jerarquia="primario"
                    />
                </div>

            </div>

        </div>
    );
}