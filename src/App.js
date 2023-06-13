import { useState } from "react"; 
import Banner from './Componentes/Banner';
import Formulario from "./Componentes/Formulario/index";

function App() {

  const [profissionais, setProfissionais] = useState();
  const aoNovoProfissionalAdicionado = (profissional)=> {
    console.log(profissional);

    setProfissionais([...profissionais, profissional])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario aoProfissionalCadastrado = {profissional => aoNovoProfissionalAdicionado(profissional)}/>
    </div>
  );
}

export default App;
