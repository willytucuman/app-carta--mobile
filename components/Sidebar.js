import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
import Categoria from "./Categoria";
const Sidebar = () => {
  const {categorias} = useKiosco();
  
  return (
    <>
    <Image 
    width={350} 
    height={50}
     src={"/assets/img/logoKabbalah.jpg"}
    alt="imagen logotipo"/>
   
    <nav className="mt-10">
      {categorias.map((categoria)=>(
        <Categoria
        key={categoria.id}
        categoria={categoria}
        />
      ))}
    </nav>  
    </> 
  
  )
}

export default Sidebar;
