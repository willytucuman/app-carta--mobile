const express = require("express")
const mysql = require("mysql")
const app = express()
const jwt = require('jsonwebtoken');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Superloco01.',
    database: 'user'
  });

  app.post('/login', (req, res) => {
    const { name, password } = req.body;
  
    // Consulta SQL para verificar el usuario y la contraseña
    const query = `SELECT * FROM users WHERE name = '${name}' AND password = SHA2('${password}', 256)`;
  
  // Ejecutar la consulta
    connection.query(query, (error, results) => {
      if (error) {
        res.status(500).send('Error de servidor');
      } else if (results.length === 0) {
        res.status(401).send('Nombre de usuario o contraseña incorrectos');
      } else {
        const token = jwt.sign({ username }, 'secreto', { expiresIn: '1D' });
        res.status(200).json({ token });
      }
    });
  });
//   app.get("http://localhost:3000/admin",(req,res)=>{
//     const token = req.headers.authorization;
//     if (!token) {
//         return res.status(401).send('Token no proporcionado');
//       }
    
//       try {
//         const decoded = jwt.verify(token, 'secreto');
//         // Si el token es válido, permitir el acceso al panel de administrador
//         if(decoded){
//             localStorage.setItem("token",decoded)
//             res.status(200).send('Bienvenido al panel de administrador');
//         } 
//         return null
        
//       } catch (error) {
//         res.status(401).send('Token inválido');
//       }
//   })
app.listen(3001,()=>{
    console.log("Listening on port 3001")
})