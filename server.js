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
         status: 'ok',
          
     });
 });

app.post('/personas', (req, res) => {

   validations.createUsersValidation(req.body);

    const { nombre, apellido, dni } = req.body;

    res.status(201).json({
        status: 'ok',
      
    });
});

app.use((error, req, res, next) => {
    res.status(400).json({
        status: 'error',
        message: error.message,
    });
});

app.listen(8000, () => console.log('API listo en el puerto: 8000...'));