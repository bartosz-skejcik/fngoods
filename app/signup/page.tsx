import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Register({}: Props) {
    return (
        <section className="flex flex-col items-center justify-start min-h-screen bg-indigo-950">
            <Navbar />
            <div className="relative flex lg:flex-row flex-col items-center justify-center gap-28 w-screen h-[80vh]">
                <div className="relative z-20 flex flex-col items-center justify-center w-1/3 gap-5 py-16 border rounded-lg bg-gradient-to-br from-gray-900/90 to-gray-900/10 border-neutral-700">
                    <h2 className="mb-4 text-5xl italic font-bold text-white uppercase">
                        sign up
                    </h2>
                    <form className="flex flex-col items-center justify-center w-full gap-6">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="w-2/3 px-4 py-4 text-left text-white bg-transparent border rounded-lg border-neutral-700"
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-2/3 px-4 py-4 text-left text-white bg-transparent border rounded-lg border-neutral-700"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-2/3 px-4 py-4 text-left text-white bg-transparent border rounded-lg border-neutral-700"
                        />
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            className="w-2/3 px-4 py-4 text-left text-white bg-transparent border rounded-lg border-neutral-700"
                        />
                        <div className="flex items-center justify-start w-2/3 my-4">
                            <div className="flex items-center justify-center gap-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="w-5 h-5 border border-neutral-500"
                                />
                                <label
                                    htmlFor="remember"
                                    className="font-medium text-white"
                                >
                                    I agree to {"FnGoods'"}{" "}
                                    <Link
                                        href="/terms"
                                        className="text-yellow-500"
                                    >
                                        Terms
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/privacy"
                                        className="text-yellow-500"
                                    >
                                        Privacy
                                    </Link>
                                    .
                                </label>
                            </div>
                        </div>
                        <button className="w-2/3 py-4 text-xl font-bold text-white uppercase transition-shadow bg-yellow-500 border border-yellow-500 rounded-md shadow-lg hover:shadow-xl duartion-300 shadow-yellow-500/50 hover:shadow-yellow-500">
                            sign up
                        </button>
                    </form>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center w-1/3 gap-8 h-2/3">
                    <Image
                        src="/logo.svg"
                        width={450}
                        height={150}
                        alt="logo"
                    />
                    <p className="w-full text-center text-white lg:w-2/3">
                        With Accempire you can easily find and buy the account
                        you are looking for.
                    </p>
                    <div className="flex items-center justify-center w-2/3 text-lg font-semibold text-white">
                        <Link
                            href="/login"
                            className="w-1/2 py-4 text-center uppercase transition-shadow bg-yellow-500 border border-yellow-500 hover:shadow-lg duartion-300 hover:shadow-yellow-500"
                        >
                            login
                        </Link>
                        <Link
                            href="/signup"
                            className="w-1/2 py-4 text-center uppercase transition-shadow bg-gray-900 border border-gray-600 hover:shadow-lg duartion-300 hover:shadow-gray-500"
                        >
                            signup
                        </Link>
                    </div>
                </div>
                <Image
                    src="/background.png"
                    width={1920}
                    height={1080}
                    alt="smth"
                    className="object-cover h-[92vh] object-center opacity-10 absolute inset-0 w-screen z-0"
                />
            </div>
        </section>
    );
}
