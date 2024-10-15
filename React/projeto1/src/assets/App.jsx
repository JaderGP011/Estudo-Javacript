import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";  

function App() { //Sempre fazer o componente com o nome do arquivo
  return (
    <div>
      <Home/>
      <BrowserRouter>
        <Routes>
          <Route pafh ="/" element={<Home/>}></Route>
          <Route pafh ="/sobre" element={<Sobre/>}></Route>
          <Route pafh ="/contato" element={<Contato/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;

// npm i react-router-dom para baixar biblioteca para usar links para outras pgnas 