"use client";

import { toast } from "react-hot-toast";
import Input from "@/components/ui/Input";
import BotonSubmit from "@/components/buttons/BotonSubmit";

export default function SugerenciasForm() {

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
        const empresa = (document.getElementById("empresa") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const mensaje = (document.getElementById("mensaje") as HTMLTextAreaElement).value;

        try {
            const res = await fetch("/api/contacto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, empresa, email, mensaje }),
            });

            if (!res.ok) throw new Error("No se pudo enviar el mensaje.");
            toast.success("Mensaje enviado con éxito");
        } catch (err) {
            toast.error("Hubo un problema al enviar tu mensaje.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="appearance-none flex flex-col gap-[2rem] px-[2.6rem] py-[2rem] bg-[#fff] rounded-[1.2rem] shadow-[0px_4px_20px_rgba(0,0,0,0.1)]">

            <div className="w-full flex flex-col gap-[1rem]">
                <label htmlFor="nombre">Tu nombre</label>
                <Input
                    tipo="text"
                    icon
                    id="nombre"
                    placeholder="Escribe aquí tu nombre..."
                    required
                />
            </div>

            <div className="w-full flex flex-col gap-[1rem]">
                <label htmlFor="empresa">La Empresa a la que representas</label>
                <Input
                    tipo="text"
                    icon
                    customIcon="/icons/icono-form-empresa.svg"
                    id="empresa"
                    placeholder="Escribe aquí el nombre de la empresa..."
                    required
                />
            </div>

            <div className="w-full flex flex-col gap-[1rem]">
                <label htmlFor="email">Tu email</label>
                <Input
                    tipo="email"
                    icon
                    id="email"
                    placeholder="Escribe aquí tu email..."
                    required
                />
            </div>

            <div className="w-full flex flex-col gap-[1rem]">
                <label htmlFor="mensaje">Escribe tu mensaje</label>
                <Input
                    tipo="textarea"
                    icon
                    id="mensaje"
                    rows={6}
                    required
                />
            </div>

            <div className="w-full flex justify-end items-center">
                <BotonSubmit
                    texto="Enviar"
                />
            </div>

        </form>
    );
}