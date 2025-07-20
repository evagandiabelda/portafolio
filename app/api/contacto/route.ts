import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const { nombre, empresa, email, mensaje } = await request.json();

        if (!nombre || !empresa || !email || !mensaje) {
            return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Spiced App" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: "¡Empresa interesada!",
            html: `
            <p><strong>Nombre:</strong><br/>${nombre}</p>
            <p><strong>Empresa:</strong><br/>${empresa}</p>
            <p><strong>Email:</strong><br/>${email}</p>
            <p><strong>Mensaje:</strong><br/>${mensaje}</p>
        `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error enviando email:", error);
        return NextResponse.json({ error: "Error enviando el mensaje." }, { status: 500 });
    }
}