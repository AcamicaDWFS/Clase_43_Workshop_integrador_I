const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { URLSearchParams } = require('url');
const { getMaxListeners } = require('process');

const middlewares = require('./middlewares');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/usuarios', middlewares.checkUser);

//Array de personas
let usuarios = new Array();

//POST de usuarios
app.post('/usuarios', (req, res) => {
  usuarios.push(req.user);

  res.json({
    status: 200,
    message: 'Nueva usuario creado.',
    result: usuarios[usuarios.length - 1],
  });
});

//GET de todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Server en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000');
});
