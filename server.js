const express = require('express');
const validations = require('./validations');

//Para formulario
const bodyParser = require('body-parser');


const app = express();

//Para formulario
app.use(express.static(__dirname + '/personas'));
app.use(bodyParser.urlencoded({ extended: false })); //Parsea solo strings

app.use(express.json());

app.get('/test', (req, res) => {

     res.json({
         status: 'GET ok.',
          
     });
 });

 
app.post('/personas', (req, res) => {

   validations.createUsersValidation(req.body);

    const { nombre, apellido, dni } = req.body;

    var rp = require('request-promise');

    var options = {
        method: 'POST',
        uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
        body: {
            nombre: nombre,
            apellido: apellido,
            dni: dni
        },
        json: true //De String a JSON
    };
     
    rp(options)
        .then(function (parsedBody) {
            console.log("Creado correctamente.")
        })
        .catch(function (err) {
            console.log("Error al crearlo.")
        });

        res.status(201).json({
            status: 'POST ok.',
             
        });
      
});

app.use((error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: error.message,
    });
});

app.listen(8000, () => console.log('API listo en el puerto: 8000...'));