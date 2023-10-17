import Image from "next/image";
import Link from "next/link";
import Logotipo from "@/images/logotipo-tlviagens.png"

export default function Header () {
    return (
        <>
            <header className="bg-sky-800 max-w-screen px-7 py-3 flex flex-col items-center justify-between flex-wrap text-white sm:flex-row">
                <Link href="/"><Image src={Logotipo} alt="Logotipo" width={200} height={200}/> </Link>
                <nav className="flex flex-col gap-4 mt-2 sm:flex-row">
                    <Link href="/" className="border-b border-transparent hover:border-white">INÍCIO</Link>
                    <Link href="#about" className="border-b border-transparent hover:border-white">A EMPRESA</Link>
                    <Link href="#services" className="border-b border-transparent hover:border-white">SERVIÇOS</Link>
                    <Link href="#contacts" className="border-b border-transparent hover:border-white">CONTATOS</Link>
                </nav>
            </header>
        </>
    )
}