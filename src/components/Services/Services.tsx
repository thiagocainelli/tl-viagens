import imageFamily from "@/images/familia-viajando.jpg"
import image24hrs from "@/images/24-7-servicos.jpg"
import visaAndPassport from "@/images/passaporte-e-visto.jpg"
import othersServices from "@/images/outros-servicos.jpg"
import Image from "next/image";
import { IconCheck } from "@tabler/icons-react";
import Button from "../Button";

export default function Services () {
    return (
        <section className="flex flex-col items-center border-b border-zinc-200">
            <h2 className="text-4xl mt-5 mb-7" id="services">Nossos Serviços</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl items-center justify-center mb-5">
                <div className="flex flex-col w-[300px] h-[650px] border border-black rounded-lg p-2 mb-5">
                    <Image src={imageFamily} alt="Familia Viajando" width={350} height={50}/>
                    <h3 className="text-center mt-3 mb-7 font-black text-base">Pacotes Totalmente personalizados</h3>
                    <div className="flex flex-col gap-4">
                        <p className="flex gap-2"><IconCheck className="text-green-600"/> Ajuda com a escolha do destino e dos dias;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Cotação e reserva do hotel;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Cotação e reserva da passagem aérea;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Transfer de ida e volta exclusivos;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Compra de atrações turisticas.</p>
                    </div>
                    <div className="flex justify-center w-full">
                        <Button text="Entre em contato"/>
                    </div>
                </div>
                <div className="flex flex-col w-[300px] h-[650px] border border-black rounded-lg p-2 mb-5">
                    <Image src={visaAndPassport} alt="Visto e passaporte" width={350} height={50}/>
                    <h3 className="text-center mt-3 mb-7 font-black text-lg">Assessoria com Visto e passaporte</h3>
                    <div className="flex flex-col gap-4">
                        <p className="flex gap-2"><IconCheck className="text-green-600"/> Auxilio para fazer o passaporte;</p>
                        <p  className="flex gap-2 items-center"><IconCheck className="text-green-600"/> Assessoria para tirar o seu visto;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Realizamos os pagamentos das taxas;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Preenchimento de formulários e documentos.</p>
                    </div>
                    <div className="flex justify-center w-full mt-2">
                        <Button text="Entre em contato"/>
                    </div>
                </div>

                <div className="flex flex-col w-[300px] h-[650px] border border-black rounded-lg p-2 mb-5">
                    <Image src={image24hrs} alt="24hs funcionando" width={350} height={50}/>
                    <h3 className="text-center mt-3 mb-7 font-black text-lg">Auxilio 24hs por dia todos os dias</h3>
                    <div className="flex flex-col gap-4">
                        <p className="flex gap-2"><IconCheck className="text-green-600"/> Ajudamos com tradução;</p>
                        <p  className="flex gap-2 items-center"><IconCheck className="text-green-600"/> Qualquer problema que tiver iremos ajudá-lo;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Nossa equipe está online o tempo todo;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Podem entrar em contato por telefone ou WhatsApp.</p>
                    </div>
                    <div className="flex justify-center w-full mt-3">
                        <Button text="Entre em contato"/>
                    </div>
                </div>

                <div className="flex flex-col w-[300px] h-[650px] border border-black rounded-lg p-2 mb-5">
                    <Image src={othersServices} alt="Outros serviços" width={350} height={50}/>
                    <h3 className="text-center mt-3 mb-7 font-black text-lg">Serviços Extras</h3>
                    <div className="flex flex-col gap-4">
                        <p className="flex gap-2"><IconCheck className="text-green-600"/> Aluguel de carros;</p>
                        <p  className="flex gap-2 items-center"><IconCheck className="text-green-600"/> Seguro viagem;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Reservas de restaurantes;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Dicas de segurança;</p>
                        <p  className="flex gap-2"><IconCheck className="text-green-600"/> Ajuda com compra das malas, mochilas e bolsas.</p>
                    </div>
                    <div className="flex justify-center w-full mt-5">
                        <Button text="Entre em contato"/>
                    </div>
                </div>
            </div>
        </section>
    )
}