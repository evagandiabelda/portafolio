"use client";

import Logo from '@/components/icons/Logo';

export default function Footer() {
    return (
        <footer className="w-full flex flex-col gap-0 dark">
            <div className='w-full flex justify-between items-center bg-[var(--background)]'>
                <Logo modo='oscuro' />
                <p className='text-[0.8rem] text-[var(--foreground)]'>Eva Gandia Belda (2025). Creado con Next.js.</p>
            </div>
        </footer>
    );
};