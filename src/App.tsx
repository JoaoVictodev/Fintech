import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import Resumo from "./Pages/Resumo";
import "./Style.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sidenav />
        <Resumo />
      </main>
    </>
  );
}

export default App;
