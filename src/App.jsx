import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Menu from "./components/Menu/Menu";
import Location from "./components/Location/Location";
import DeliveryCTA from "./components/DeliveryCTA/DeliveryCTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Hero />

      <main>
        <HowItWorks />
        <WhyChoose />
        <Menu />
        <Location />
        <DeliveryCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;