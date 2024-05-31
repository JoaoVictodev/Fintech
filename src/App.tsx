import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";
import { DataContextProvider } from "./Context/DataContext";
import Resumo from "./Pages/Resumo";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <Header />
      <main>
        <Sidenav />
        <Resumo />
      </main>
    </DataContextProvider>
  );
}

export default App;
