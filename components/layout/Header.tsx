"use client";

import React from 'react';
import { useState, Suspense } from "react";
import Logo from '@/components/icons/Logo';
/* import Menu from '@/components/layout/Menu'; */

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full h-[80px] px-8 py-3 flex items-center justify-between gap-9 bg-[--blanco]">
            {/* Caja Principal */}
            <div className="flex items-center space-x-9">
                {/* Logo */}
                <Logo modo='claro' />
                {/* Menú */}
                {/* <Menu tipo="header" /> */}
            </div>
        </header>
    );
};