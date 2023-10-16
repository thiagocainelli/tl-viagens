import Apresentation from "@/components/FirstSection/Apresentation";
import Footer from "@/components/Footer";
import Contatos from "@/components/FourthSection/Contatos";
import Header from "@/components/Header";
import About from "@/components/SecondSection/About";
import Services from "@/components/ThirdSection/Services";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Apresentation />
        <About />
        <Services />
        <Contatos />
      </main>

      <Footer />

    </>
  )
}
