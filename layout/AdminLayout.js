// import Head from "next/head";
// import Image from "next/image";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Login from "../components/Login";
// import { useState } from "react";

// export default function AdminLayout({ children, pagina }) {
//   const [name, setName] = useState("")
//   const [password, setPassword] = useState("")
//   const [error,setError] = useState("")
//   const [showModal, setShowModal] = useState(true);   
//   const [loggedIn, setLoggedIn] = useState(false);
//   async function handleSubmit(e){
//     e.preventDefault()
//     try{
//         const response = await axios.post('http://localhost:3001/login',{
//             name,
//             password,
//         })
//         const token = response.data.token;
//         // Almacenar el token en el almacenamiento local o en una cookie
//         localStorage.setItem('token', token);
//         setTimeout(() => {
//           setLoggedIn(true);
//           setShowModal(false);
//         }, 2000);
//     }catch(error){
//         setError("Nombre o password incorrectos")
//     }
// }
// const closeModal = () => {
//   setShowModal(false);
// };

// return (
//   <>
//     <Login
//       name={name}
//       password={password}
//       showModal={showModal}
//       closeModal={closeModal}
//       handleSubmit={handleSubmit}
//       setName={setName}
//       setPassword={setPassword}
//       error = {error}
//     />
//     {loggedIn && (
//       <>
//         <Head>
//           <title>Café - {pagina}</title>
//           <meta name="description" content="Cafetería" />
//         </Head>

//         <div className="md:flex">
//           <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
//             <Image
//               width={300}
//               height={100}
//               src="/assets/img/logo.svg"
//               alt="imagen logotipo"
//             />
//           </aside>

//           <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
//             <div className="p-10">
//               {children}
//             </div>
//           </main>
//         </div>
//         <ToastContainer />
//       </>
//     )}
//   </>
// )}
import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminLayout({ children, pagina }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Cafetería" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    width={300}
                    height={100}
                    src="/assets/img/logoKabbalah.jpg"
                    alt="imagen logotipo"
                />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}