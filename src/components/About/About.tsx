import "./About.css";

export default function About () {
    return (
        <section className="flex items-center justify-center border-b border-zinc-200">

            <div className="flex flex-col items-center justify-center max-w-7xl">
                <h2 className="text-4xl mt-4" id="about">Sobre Nós</h2>
                <p className="text-lg mt-5 mb-5 p-3">
                    Uma empresa com sede na cidade de Ribeirão Preto - SP, fundada em 2020. Inicíamos nossas atividades organizando pequenas excursões pelas cidades próximas e fomos expandindo nossos serviços e horizontes.
                    Somos apaixonados por viagens e por ajudar outros viajantes com seus roteiros, passagens aéreas mais baratas, hotéis, passeios dentre muitos outros serviços.
                    Nossa empresa conta com uma equipe de pessoas totalmente qualificadas e apaixonadas por viagem. Sempre prontos para atender os clientes e oferecer o melhor serviço possível para que façam uma viagem INESQUECÍVEL!
                    
                </p>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-24">
                    <div className="cardAbout">
                        <span className="text-sky-800 font-black text-5xl mb-2">+300</span> Pacotes realizados
                    </div>
                    <div className="cardAbout">
                        <span className="text-sky-800 font-black text-4xl mb-2">+R$150mil</span> Economizados
                    </div>
                    <div className="cardAbout">
                        <span className="text-sky-800 font-black text-5xl mb-2">+30</span> Fornecedores parceiros
                    </div>
                    <div className="cardAbout">
                        <p className="text-sky-800 font-black text-3xl mb-2">+Qualidade</p> 
                        <p className="text-sky-800 font-black text-3xl mb-2">+Segurança</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}