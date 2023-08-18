import Navbar from "@/components/Navbar";
import Image from "next/image";
import Banner from "@/components/Banner";
import SearchBar from "@/components/SearchBar";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-start min-h-screen bg-indigo-950">
            <Navbar />
            <div className="relative flex flex-col items-center justify-center gap-28 w-screen h-[80vh]">
                <Banner />
                <div className="relative z-50 flex flex-col items-center justify-center w-3/4 gap-5">
                    <h1 className="text-2xl font-bold text-white uppercase lg:text-4xl">
                        products
                    </h1>
                    <SearchBar />
                </div>
                <Image
                    src="/background.png"
                    width={1920}
                    height={1080}
                    alt="smth"
                    className="object-cover h-[80vh] object-center opacity-10 absolute inset-0 w-screen"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-indigo-950"></div>
            </div>
        </section>
    );
}
