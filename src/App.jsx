import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
import "./App.css";
import { PageSection } from "./components/PageSection";
import { Background } from "./components/Background";
import { HomeImage } from "./components/HomeImage";
import test_img from "./assets/test.avif";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="app-header">
        <ResponsiveAppBar />
      </header>
      <main className="home">
        <div className="content">
          <PageSection>
            <HomeImage img={test_img} />
            <HomeImage img={test_img} />
          </PageSection>
          <PageSection isReversed={true}></PageSection>
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
