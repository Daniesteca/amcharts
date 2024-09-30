const express = require('express');
const path = require('path');//para reconocer archivos planos
const app = express();

app.set('view engine', 'ejs');

// Servimos archivos estáticos desde la misma carpeta que app.js
app.use(express.static(__dirname, { root: './' }));

// Utilizamos el router
app.use('/', require('./routes/router'));

app.listen(5000, ()=>{
    console.log('Server corriendo en http://localhost:5000');
});