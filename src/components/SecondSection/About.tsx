import "../SecondSection/About.css";

export default function About () {
    return (
        <section className="flex items-center justify-center">

            <div className="flex flex-col items-center justify-center max-w-7xl">
                <h2 className="text-4xl mt-4">Sobre Nós</h2>
                <p className="text-lg mt-5 mb-5">
                    Somos uma empresa com sede na cidade de Ribeirão Preto - SP, fundado em 2020. Inicíamos nossas atividades organizando pequenas viagens pelas cidades próximas e fomos espandindo nossos serviços e horizontes.
                    Nosso CEO Thiago Cainelli sempre foi um apaixonado por viagens e por ajudar os outros viajantes com seus roteiros, pesquisando passagens mais baratas, hotéis, passeios teve a ideia de criar serviços exclusivos para os clientes!
                </p>

               
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-5">
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