'use client';

import Image from "next/image";

export default function Logo() {

    return (
        <a href="/">
            <Image
                src="/logos/logo-eva.svg"
                alt="Logotipo"
                width={40}
                height={40}
                className="w-full object-contain"
            />
        </a>

    );

};
