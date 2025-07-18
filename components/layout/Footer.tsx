"use client";

import Logo from '@/components/layout/Logo';

export default function Footer() {
    return (
        <footer className="dark p-[1rem] bg-[var(--background)]">
            <div className='flex justify-between items-center px-[2rem] py-[2rem]'>
                <Logo />
                <p className='text-[0.8rem] text-[var(--foreground)]'>Eva Gandia Belda (2025). Creado con Next.js.</p>
            </div>
        </footer>
    );
};