'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from 'react-icons/md';

import Boton from "@/components/buttons/Boton";

export default function Trayectoria() {

    return (
        <div className="w-full flex">

            {/* Sidebar */}

            <div className="w-1/4 px-[3rem] py-[5rem] bg-[var(--gris-claro)] rounded-tr-[4rem]">
                <h1>Trayectoria</h1>
                <p>Responsabilidad y compromiso:</p>
                <p>Trayectoria profesional marcada por el compromiso y la constancia. Durante más de una década, he formado parte del mismo equipo, desarrollando múltiples funciones y ganándome la confianza de clientes y compañeros.</p>
                <p>Creo en el valor de la estabilidad, la responsabilidad y el trabajo bien hecho.</p>
            </div>

            {/* Contenido */}

            <div className="w-3/4 px-[3rem] py-[5rem] flex flex-col gap-[2rem]">

                <div className="flex flex-col gap-[3rem]">

                    {/* TIMELINE */}

                    <VerticalTimeline layout={'1-column-left'} lineColor={'var(--brand)'}>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#e7e7e7', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid #e7e7e7' }}
                            iconStyle={{ background: 'var(--brand)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <p className='text-[var(--gris-oscuro)] px-[1rem] pb-[2rem]'>2013 - actualidad</p>
                            <h3 className="vertical-timeline-element-title px-[1rem] pb-[1rem] text-[var(--gris-oscuro)]">Responsable de Producción Gráfica</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#b2b2b2] px-[1rem]">Imprenta PLAGI (Ontinyent)</h4>
                            <ul className='text-[var(--gris-oscuro)] m-[0px] pt-[2rem]'>
                                <li>Comunicación con el cliente</li>
                                <li>Diseño gráfico y maquetación</li>
                                <li>Gestión de preimpresión y flujos de impresión</li>
                                <li>Realización de acabados gráficos</li>
                            </ul>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#e7e7e7', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid #e7e7e7' }}
                            iconStyle={{ background: 'var(--brand)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <p className='text-[var(--gris-oscuro)] px-[1rem] pb-[2rem]'>2011</p>
                            <h3 className="vertical-timeline-element-title px-[1rem] pb-[1rem] text-[var(--gris-oscuro)]">Copywriter y Diseño UI</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#b2b2b2] px-[1rem]">3dids Consultoría de E-Commerce</h4>
                            <ul className='text-[var(--gris-oscuro)] m-[0px] pt-[2rem]'>
                                <li>Prácticas Formativas como parte de mi Licenciatura en Publicidad y Relaciones Públicas.</li>
                            </ul>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            contentStyle={{ background: '#e7e7e7', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid #e7e7e7' }}
                            iconStyle={{ background: 'var(--brand)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <p className='text-[var(--gris-oscuro)] px-[1rem] pb-[2rem]'>2006-2010</p>
                            <h3 className="vertical-timeline-element-title px-[1rem] pb-[1rem] text-[var(--gris-oscuro)]">Otros trabajos</h3>
                            <h4 className="vertical-timeline-element-subtitle text-[#b2b2b2] px-[1rem]">Hostelería y cuidado de niños en el extranjero</h4>
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