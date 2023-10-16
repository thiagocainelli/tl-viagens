import "@/components/FourthSection/contatos.css";
import { IconBrandWhatsapp, IconHome, IconMail } from '@tabler/icons-react';

export default function Contatos () {
    return (
        <section className="flex flex-col items-center justify-between mt-6 mb-10">
            
            <h2 className="text-4xl mb-5">Contatos</h2>
            
            <div className="flex flex-col items-center justify-center max-w-7xl lg:flex-row ">
                <div className="bg-sky-800 max-w-7xl p-10 px-20 text-white h-[550px]">
                    <h3 className="text-center text-2xl mb-6">Envie-nos uma mensagem</h3>
                    <form className="">
                        <div className="mb-2">
                            <label htmlFor="name">Nome completo</label>
                            <input
                                className="bg-sky-900"
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email</label>
                            <input
                                className="bg-sky-900" 
                                type="email" 
                                name="email" 
                                id="email" 
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="contact">Contato</label>
                            <input
                                className="bg-sky-900"
                                placeholder="(xx) xxxxx-xxxx" 
                                type="tel" 
                                name="contact" 
                                id="contact" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message">Mensagem</label>
                            <textarea name="message" id="message"  className="bg-sky-900"></textarea>
                        </div>

                        <div className="flex items-center justify-center">
                            <button className="bg-sky-900 py-2 px-5 mt-4 hover:bg-sky-700 rounded-md">
                                Enviar
                            </button>
                        </div>
                    </form>  
                </div>

                <div className="p-12 text-white bg-sky-600 h-[550px]">
                    <h3 className="text-2xl text-center mb-5">Entre em contato conosco</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14880.910492417564!2d-47.80051733766213!3d-21.18311477147639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1697487884461!5m2!1spt-BR!2sbr" width="400" height="200" loading="lazy"></iframe>

                    <p className="contactTexts"> <IconHome /> Rua Lafaite, 1200 - Ribeirão Preto / SP </p>
                    <p className="contactTexts"> <IconBrandWhatsapp /> (16) 98846-9974 </p>
                    <p className="contactTexts"> <IconMail /> contato@tlviagens.com.br</p>
                </div>
            </div>
        </section>
    )
}