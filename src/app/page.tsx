import Apresentation from "@/components/Apresentation/Apresentation";
import Footer from "@/components/Footer/Footer";
import Contatos from "@/components/Contacts/Contatos";
import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";

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
