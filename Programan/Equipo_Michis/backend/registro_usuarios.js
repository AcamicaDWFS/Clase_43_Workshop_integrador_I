const express = require("express");
const bodyParser = require('body-parser');
const { URLSearchParams } = require("url");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Server en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

//Persona class
class Usuario {
    constructor(nombre, apellido, edad, telefono, email, direccion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
    }
}

//Array de personas
let usuarios = new Array();

//POST de usuarios
app.post('/usuarios/', (req, res) =>{
    const usuario = new Usuario(req.body.nombre, req.body.apellido, req.body.edad, req.body.telefono,
        req.body.email, req.body.direccion);
    usuarios.push(usuario);
    res.json("Nuevo usuario creado");
});

//GET de todos los usuarios
app.get('/usuarios/', (req, res) => {
    res.json(usuarios);
});
