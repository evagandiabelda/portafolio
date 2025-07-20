'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Logo() {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href="/"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="inline-block transition duration-300 ease-in-out"
        >
            <Image
                src={hovered ? "/logos/logo-eva-hover.svg" : "/logos/logo-eva.svg"}
                alt="Logotipo"
                width={50}
                height={50}
                className={`object-contain w-full transition-transform duration-300 ease-in-out ${hovered ? "animate-bounce" : ""
                    }`}
            />
        </a>
    );
}
