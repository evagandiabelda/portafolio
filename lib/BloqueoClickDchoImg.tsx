'use client'

import { useEffect } from 'react';

export default function BloqueoClickDerechoImagen() {
    useEffect(() => {
        const disableRightClickOnImages = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'IMG') {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', disableRightClickOnImages);

        return () => {
            document.removeEventListener('contextmenu', disableRightClickOnImages);
        };
    }, []);

    return null; // No renderiza nada visible
}