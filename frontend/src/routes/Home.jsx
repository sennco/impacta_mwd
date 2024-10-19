import { useState } from "react";
import CadastroDoador from "../Components/doador/cadastroDoador"
import CadastroAbrigo from "../Components/abrigo/cadastroAbrigo";
import Logo from "../Components/logo/logo";
import style from "./styles/Home.module.css"

function Home() {
  const [tipoCadastro, setTipoCadastro] = useState("doador");

  const handleSelect = (tipo) => {
    setTipoCadastro(tipo);
  };

  return (
    <div className={style.container}>
      <Logo />
  
      {tipoCadastro === "doador" ? (
        <CadastroDoador onSelect={handleSelect} tipoCadastro={tipoCadastro} />
      ) : (
        <CadastroAbrigo onSelect={handleSelect} tipoCadastro={tipoCadastro} />
      )}
    </div>
  );
}

export default Home;
