import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function SearchBar({}: Props) {
    return (
        <div
            style={{
                background:
                    "linear-gradient(140deg, rgba(46, 93, 147, 0.25) 0%, rgba(46, 93, 147, 0.25) 0%, rgba(12, 24, 38, 0.00) 100%)",
            }}
            className="flex w-full p-1.5 border rounded-2xl border-slate-300/50"
        >
            <input
                type="text"
                className="w-full h-full px-2 text-white bg-transparent border-0 outline-none"
            />
            <button className="p-1 border-2 rounded-full bg-amber-400 text-amber-600 border-amber-500">
                <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
        </div>
    );
}
