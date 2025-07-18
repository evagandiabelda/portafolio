"use client";

import React from 'react';
import { useState, Suspense } from "react";
import Logo from '@/components/layout/Logo';
import Menu from '@/components/layout/Menu';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="px-[1rem] pt-[1.2rem] pb-[1rem] bg-white">
            {/* Caja Principal */}
            <div className="flex items-center justify-between gap-9 px-[2rem]">
                {/* Logo */}
                <Logo />
                {/* Menú */}
                <Menu tipo="normal" />
                {/* <Menu tipo="header" /> */}
            </div>
        </header>
    );
};