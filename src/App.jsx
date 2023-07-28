import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
import "./App.css";
import { PageSection } from "./components/PageSection";
import { Background } from "./components/Background";
import { HomeImage } from "./components/HomeImage";
import { HomeList } from "./components/HomeList";
import { Whatsapp } from "./components/Whatsapp";
import test_img from "./assets/test.avif";
import list_icon from "./assets/list.svg";

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
          <PageSection></PageSection>
          <Whatsapp />
        </div>
        <div className="background">
          <Background />
        </div>
      </main>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
