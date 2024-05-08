import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero";
import { Bloque1 } from "./components/Bloque1"
import { Bloque2 } from "./components/Bloque2"
import { Bloque3 } from "./components/Bloque3";
import { Bloque4 } from "./components/Bloque4";
import { Bloque5 } from "./components/Bloque5";
import { Bloque6 } from "./components/Bloque6";
import { Bloque7 } from "./components/Bloque7";
import { Bloque8 } from "./components/Bloque8";
import { Footer } from "./components/Footer";
import { WhatsApp } from "./components/WhatsApp";

function App() {
  return (
    <>
      <Navbar
        name={'Marketing'}
        pag2={'Nosotros'}
        pag1={'Servicios'}
        pag3={'Contacto'}
      />
      <WhatsApp />
      <Hero
        title={'¿Quieres dejar de generar likes y empezar a vender?'}
        body={'Nosotros te ayudamos'}
      />
      <Bloque1 />
      <Bloque2 />
      <Bloque3 />
      <Bloque4 />
      <Bloque5 />
      <Bloque6 />
      <Bloque7 />
      <Bloque8 />
      <Footer name={'Marketing'} mail={'correo@marketing'} year={'2024'} />
    </>
  );
}

export default App
