import Image from "next/image";
import Link from "next/link";
import Logotipo from "@/images/logotipo-tlviagens.png"

export default function Footer () {
    return (
        <>
            <footer className="bg-sky-800 max-w-screen p-3 flex flex-col items-center flex-wrap gap-2 text-white">
                <Link href="/"><Image src={Logotipo} alt="Logotipo" width={220} height={220}/> </Link>
               <div className="flex gap-1 items-center">
                   <p>TL VIAGENS 2023 - </p>
                   <p>Todos os direitos reservados.</p>
               </div>
               
            </footer>
        </>
    )
}