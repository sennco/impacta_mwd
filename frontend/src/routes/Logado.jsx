 import { useNavigate } from "react-router-dom";
 import styles from "./styles/Logado.module.css"

const Logado = () => {
   const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token")
    console.log("token removido")
   
     navigate("/login")
  };

  return (
     <div className={styles.container}>
      <h1>Você está logado!</h1>
      <button onClick={handleLogout}>Sair</button>
     </div>
  
  );
};

export default Logado;
