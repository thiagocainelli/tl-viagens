import Link from "next/link";

export default function Header () {
    return (
        <>
            <header className="bg-sky-800 max-w-screen p-5 flex flex-col items-center justify-between flex-wrap text-white md:flex-row">
                <Link href="/">TL VIAGENS</Link>
                <nav className="flex gap-4 flex-wrap">
                    <Link href="/" className="border-b border-transparent hover:border-white">INÍCIO</Link>
                    <Link href="#about" className="border-b border-transparent hover:border-white">A EMPRESA</Link>
                    <Link href="#services" className="border-b border-transparent hover:border-white">SERVIÇOS</Link>
                    <Link href="#contacts" className="border-b border-transparent hover:border-white">CONTATOS</Link>
                </nav>
            </header>
        </>
    )
}