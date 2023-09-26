import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
import { PageSection } from "./components/PageSection";
import { Background } from "./components/Background";
import { HomeImage } from "./components/HomeImage";
import { HomeList } from "./components/HomeList";
import { Whatsapp } from "./components/Whatsapp";
import { Appointment } from "./components/Appointment";
import test_img from "./assets/test.avif";
import list_icon from "./assets/list.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const list = [
    "Doctora con especialidad en pediatría.",
    "Estudios profesionales en la Universidad del Cauca.",
    "Estudios complementarios en infectología.",
    "Apasionada por el cuidado de nuestros niños y niñas del sur occidente Colombiano.",
    "Profesional, ética e Integral.",
  ];

  const list2 = [
    "Experiencia sólida de 30 años en pediatría.",
    "Empática y comprensiva con padres y niños.",
    "Comunicación clara y accesible para todos.",
    "Enfoque preventivo para la salud infantil.",
    "Actualizada con los últimos avances médicos.",
    "Medico docente de la Universidad del Cauca & Hospital San José.",
  ];

  return (
    <div className="App">
      <header className="app-header">
        <ResponsiveAppBar />
      </header>
      <main className="home">
        <div className="content">
          <PageSection>
            <HomeImage img={test_img} />
            <HomeList title="Quien soy" list={list} image={list_icon} />
          </PageSection>
          <PageSection isReversed={true}>
            <HomeImage img={test_img} />
            <HomeList title="Mi experiencia" list={list2} image={list_icon} />
          </PageSection>
          <PageSection>
            <Appointment />
          </PageSection>
          <Whatsapp />
        </div>
        <div className="background">
          <Background />
        </div>
      </main>
    </div>
  );
}

export default App;
