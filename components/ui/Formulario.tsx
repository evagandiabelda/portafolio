"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Input from "@/components/ui/Input";
import BotonSubmit from "@/components/buttons/BotonSubmit";

export default function SugerenciasForm() {

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const mensaje = (document.getElementById("mensaje") as HTMLTextAreaElement).value;

        try {
            const res = await fetch("/api/contacto/sugerencias", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mensaje }),
            });

            if (!res.ok) throw new Error("No se pudo enviar el mensaje.");
            toast.success("Mensaje enviado con éxito");
        } catch (err) {
            toast.error("Hubo un problema al enviar tu mensaje.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12 tablet:px-col1 laptop:px-col2">

            <div className="w-full flex flex-col gap-6">
                <label htmlFor="mensaje">Explícanos cómo podríamos mejorar:</label>
                <Input
                    tipo="textarea"
                    icon
                    id="mensaje"
                    placeholder="Escribe aquí tu sugerencia..."
                    rows={6}
                    required
                />
            </div>

            <div className="w-full flex justify-center items-center">
                <BotonSubmit
                    texto="Enviar"
                />
            </div>

        </form>
    );
}