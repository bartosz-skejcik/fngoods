import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Navbar({}: Props) {
    return (
        <nav className="flex items-center justify-around w-full py-3 border-b border-slate-700">
            <Image src="/logo.svg" width={150} height={50} alt="logo" />
            <div className="flex items-center justify-center gap-12 text-lg text-white">
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
            </div>
            <div className="flex gap-4 font-medium">
                <Link
                    href="/login"
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
            <button className="px-3 py-1 border-2 rounded-xl border-amber-500 bg-amber-400 text-amber-600">
                <ShoppingCartIcon className="w-7 h-7" />
            </button>
        </nav>
    );
}
