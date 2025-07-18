"use client";

import Logo from '@/components/icons/Logo';

export default function Footer() {
    return (
        <footer className="dark">
            <div className='flex justify-between items-center px-[1rem] py-[1rem] bg-[var(--background)]'>
                <Logo />
                <p className='text-[0.8rem] text-[var(--foreground)]'>Eva Gandia Belda (2025). Creado con Next.js.</p>
            </div>
        </footer>
    );
};