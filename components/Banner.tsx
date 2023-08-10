import Image from "next/image";
import React from "react";

type Props = {};

export default function Banner({}: Props) {
    return (
        <div className="flex items-center justify-between w-5/6 border 2xl:w-2/3 rounded-xl border-slate-700 backdrop-blur-sm bg-black/20">
            <div className="flex flex-col items-start justify-center py-3 pl-5 lg:py-0 lg:pl-10">
                <h2 className="text-xl font-bold text-white lg:text-3xl drop-shadow-xl">
                    Looking For
                </h2>
                <h2 className="-mt-2 text-xl font-bold text-red-500 uppercase lg:text-3xl drop-shadow-xl">
                    game accounts?
                </h2>
                <p className="text-xs lg:text-sm text-slate-200">
                    You do not need to make search on marketplaces! Find the
                    account {"you're"} looking for with Accempire!
                </p>
            </div>
            <Image
                src="/fortnite-character.png"
                width={500}
                height={300}
                alt="Banner"
                className="object-cover w-1/2 lg:w-1/2 xl:w-2/5"
            />
        </div>
    );
}
