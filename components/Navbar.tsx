"use client";

import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex items-center w-full py-3 border-b justify-evenly border-slate-700 bg-indigo-950">
            <Image
                src="/logo.svg"
                width={250}
                height={50}
                alt="logo"
                className="hidden md:block"
            />
            <Image
                src="/logo.svg"
                width={150}
                height={50}
                alt="logo"
                className="block md:hidden relative z-[9999999]"
            />
            <div className="items-center justify-center hidden gap-12 text-lg text-white md:flex">
                <Link
                    className="transition duration-300 hover:text-gray-500"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className="transition duration-300 hover:text-gray-500"
                    href="/faq"
                >
                    F.A.Q
                </Link>
                <Link
                    className="transition duration-300 hover:text-gray-500"
                    href="https://discord.gg/5XZJXN6"
                >
                    Contact
                </Link>
            </div>
            <div className="hidden gap-4 font-medium md:flex">
                <Link
                    href="/signup"
                    className="py-1 transition duration-300 border-2 hover:scale-105 rounded-xl px-7 border-amber-500 text-amber-600 bg-amber-400 hover:shadow-lg hover:shadow-amber-400/50"
                >
                    Sign up
                </Link>
                <Link
                    href="/login"
                    className="py-1 text-white transition duration-300 bg-transparent border-2 border-white rounded-xl px-7 hover:scale-105 hover:shadow-lg hover:shadow-white/50"
                >
                    Log In
                </Link>
            </div>
            <button className="px-1 py-1 border-2 md:px-3 rounded-xl relative z-[9999999] border-amber-500 bg-amber-400 text-amber-600">
                <ShoppingCartIcon className="w-7 h-7" />
            </button>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="block p-1 bg-transparent border-2 relative z-[9999999] rounded-lg md:hidden border-neutral-200"
            >
                <Bars3Icon className="text-white w-7 h-7" />
            </button>
            <div
                className="absolute w-screen h-screen bg-indigo-950 z-[999999] inset-0 transition-all duration-300 top-20"
                // if isOpen then add style translatex(100%) else dont add the style
                style={{ transform: isOpen ? "translateX(100%)" : "" }}
            >
                asd
            </div>
        </nav>
    );
}
