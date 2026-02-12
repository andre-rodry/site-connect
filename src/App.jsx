import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/globalStyles.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PaginaInicial from "./pages/paginaInicial/PaginaInicial";
import Doacao from "./pages/doacao/Doacao";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import Mentoria from "./pages/mentoria/Mentoria";
import EventosEP from "./pages/eventosEP/EventosEP";
import Usuario from "./pages/usuario/Usuario";
import ScreenSizeIndicator from "./ScreenSizeIndicator";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScreenSizeIndicator />
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/voluntariado" element={<Voluntariado />} />
            <Route path="/mentoria" element={<Mentoria />} />
            <Route path="/eventos" element={<EventosEP />} />
            <Route path="/usuario" element={<Usuario />} />
          </Routes>
        </main>
        
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;