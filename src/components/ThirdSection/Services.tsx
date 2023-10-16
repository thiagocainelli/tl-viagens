import imageFamily from "@/images/familia-viajando.jpg"
import image24hrs from "@/images/24-7-servicos.jpg"
import visaAndPassport from "@/images/passaporte-e-visto.jpg"
import othersServices from "@/images/outros-servicos.jpg"

import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";

export default function Services () {
    return (
        <section className="flex flex-col items-center">
            <h2 className="text-4xl mt-5 mb-7">Nossos Serviços</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl items-center justify-center">
                <div className="flex flex-col w-[300px] h-[600px] border border-black rounded-lg p-2 mb-5">
                    <Image src={imageFamily} alt="Familia Viajando" width={350} height={50}/>
                    <h3 className="text-center mt-3 mb-7 font-black text-base">Pacotes Totalmente personalizados</h3>
                    <div className="flex flex-col gap-4">
                        <p className="flex gap-2"><IconCheck /> Ajuda com a escolha do destino e dos dias;</p>
                        <p  className="flex gap-2"><IconCheck /> Cotação e reserva do hotel;</p>
                        <p  className="flex gap-2"><IconCheck /> Cotação e reserva da passagem aérea;</p>
                        <p  className="flex gap-2"><IconCheck /> Transfer de ida e volta exclusivos;</p>
                        <p  className="flex gap-2"><IconCheck /> Compra de atrações turisticas.</p>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] h-[600px] border border-black rounded-lg p-2 mb-5">
                    <Image src={visaAndPassport} alt="Visto e passaporte" width={350} height={50}/>
                    <h3 className="text-center mt-3 mb-7 font-black text-lg">Assessoria com Visto e passaporte</h3>
                    <div className="flex flex-col gap-4">
                        <p className="flex gap-2"><IconCheck /> Auxilio para fazer o passaporte;</p>
                        <p  className="flex gap-2 items-center"><IconCheck /> Assessoria para tirar o seu visto;</p>
                        <p  className="flex gap-2"><IconCheck /> Realizamos os pagamentos das taxas;</p>
                        <p  className="flex gap-2"><IconCheck /> Preenchimento de formulários e documentos.</p>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[300px] h-[600px] border border-black rounded-lg p-2 mb-5">
                    <Image src={image24hrs} alt="24hs funcionando" width={350} height={50}/>
                    <h3 className="text-center mt-3 mb-7 font-black text-lg">Auxilio 24hs por dia todos os dias</h3>
                    <div className="flex flex-col gap-4">
                        <p className="flex gap-2"><IconCheck /> Ajudamos com tradução;</p>
                        <p  className="flex gap-2 items-center"><IconCheck /> Qualquer problema que tiver iremos ajudá-lo;</p>
                        <p  className="flex gap-2"><IconCheck /> Nossa equipe está online o tempo todo;</p>
                        <p  className="flex gap-2"><IconCheck /> Podem entrar em contato por telefone ou WhatsApp.</p>
                        
                    </div>
                </div>
                <div className="flex flex-col w-[300px] h-[600px] border border-black rounded-lg p-2 mb-5">
                    <Image src={othersServices} alt="Outros serviços" width={350} height={50}/>
                    <h3 className="text-center mt-3 mb-7 font-black text-lg">Serviços Extras</h3>
                    <div className="flex flex-col gap-4">
                        <p className="flex gap-2"><IconCheck /> Aluguel de carros;</p>
                        <p  className="flex gap-2 items-center"><IconCheck /> Seguro viagem;</p>
                        <p  className="flex gap-2"><IconCheck /> Reservas de restaurantes;</p>
                        <p  className="flex gap-2"><IconCheck /> Dicas de segurança;</p>
                        <p  className="flex gap-2"><IconCheck /> Ajuda com compra das malas, mochilas e bolsas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}