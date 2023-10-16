import Apresentation from "@/components/FirstSection/Apresentation";
import Header from "@/components/Header";
import About from "@/components/SecondSection/About";

export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <Apresentation />
        <About />
      </main>


    </>
  )
}
