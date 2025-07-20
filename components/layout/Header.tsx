"use client";

import React from 'react';
import { useState, Suspense } from "react";
import Logo from '@/components/layout/Logo';
import Menu from '@/components/layout/Menu';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="h-[58px] px-[1rem] pt-[1.3rem] pb-[1rem] bg-white">
            {/* Caja Principal */}
            <div className="flex items-center justify-between gap-9 px-[2rem]">
                {/* Logo */}
                <div className='hover:scale-[1.02] transition ease duration-300 cursor-pointer'>
                    <Logo modo='claro' />
                </div>
                {/* Menú */}
                <Menu tipo="normal" />
                {/* <Menu tipo="header" /> */}
            </div>
        </header>
    );
};