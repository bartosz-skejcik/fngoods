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
                <p className="absolute top-1 right-[0.164rem] md:right-[0.72rem] px-1.5 text-sm text-white rounded-full bg-yellow-600 border border-amber-600">
                    0
                </p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="30"
                    viewBox="0 0 40 30"
                    fill="none"
                >
                    <g clip-path="url(#clip0_1_1321)">
                        <path
                            d="M20.2759 23.1552H10.9075C9.55651 23.1552 8.35863 22.2103 7.99302 20.8568L4.82645 9.4191C4.71396 9.00494 4.34001 8.7207 3.91294 8.7207H1.43177C0.855747 8.7207 0.390137 8.22326 0.390137 7.61035C0.390137 6.99744 0.855747 6.5 1.43177 6.5H3.91294C5.26394 6.5 6.46077 7.44491 6.82639 8.79842L7.41908 10.9414H23.3508C24.0008 10.9414 24.6174 11.2712 24.9997 11.8241C25.3789 12.3726 25.4882 13.0588 25.2997 13.7073L23.1508 20.9778C22.73 22.2903 21.5769 23.1552 20.2759 23.1552Z"
                            fill="#D97706"
                        />
                        <path
                            d="M11.4988 29.5C10.2454 29.5 9.22607 28.504 9.22607 27.2793C9.22607 26.0546 10.2454 25.0586 11.4988 25.0586C12.7522 25.0586 13.7715 26.0546 13.7715 27.2793C13.7715 28.504 12.7522 29.5 11.4988 29.5Z"
                            fill="#D97706"
                        />
                        <path
                            d="M21.1355 29.5C19.8821 29.5 18.8628 28.5041 18.8628 27.2793C18.8628 26.0546 19.8821 25.0586 21.1355 25.0586C22.3889 25.0586 23.4082 26.0546 23.4082 27.2793C23.4082 28.5041 22.3889 29.5 21.1355 29.5Z"
                            fill="#D97706"
                        />
                        <path
                            d="M28.481 20.5529C23.0539 20.5529 18.6401 16.1391 18.6401 10.712C18.6401 5.28494 23.0539 0.871094 28.481 0.871094C33.9081 0.871094 38.3219 5.28494 38.3219 10.712C38.3219 16.1391 33.9081 20.5529 28.481 20.5529ZM28.731 10.712V10.707H28.481H28.231V10.712H28.481H28.731Z"
                            fill="#CA8A04"
                            stroke="#D97706"
                            stroke-width="0.5"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1321">
                            <rect
                                width="39"
                                height="29"
                                fill="white"
                                transform="translate(0.390137 0.5)"
                            />
                        </clipPath>
                    </defs>
                </svg>
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
