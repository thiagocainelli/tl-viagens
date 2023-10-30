"use client"

import { IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import { useState } from "react"
import "./MenuHamburguer.css";

function MenuHamburguer() {
    
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    
    const handleMenuClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className="bg-transparent sm:hidden">
            <button onClick={handleMenuClick}>
                <IconMenu2 className="w-9 h-9 hover:brightness-50"/>
            </button>

            {menuIsOpen && (
                <nav className="menuHamburguer flex flex-col items-start gap-4 p-4">
                    <div className="pb-3">
                        <button onClick={handleMenuClick}>
                            <IconX className="w-9 h-9 hover:brightness-50 hover:scale-110"/>
                        </button>
                    </div>

                    <Link href="/" className="border-b border-transparent hover:border-white">INÍCIO</Link>

                    <Link href="#about" className="border-b border-transparent hover:border-white">A EMPRESA</Link>

                    <Link href="#services" className="border-b border-transparent hover:border-white">SERVIÇOS</Link>

                    <Link href="#contacts" className="border-b border-transparent hover:border-white">CONTATOS</Link>
                </nav>
            )}   
        </div>
    )
}

export default MenuHamburguer