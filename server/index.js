const express = require ('express');

const app = express();

app.listen('3000');

app.use(express.json());

//let subtitle = "Fazendo do aprendizado, uma forma de melhorar."

app.route('/').post((req,res) => {
    const {nome, sexo, idade, cpf} = req.body;
    res.send(nome + sexo + idade + cpf)
});

/*app.route('/').get( (req, res) => res.send(subtitle));

app.route('/').put((req,res) => {
    subtitle = req.body.author
    res.send(subtitle)
});*/

// Method Delete

/*let subtitle = "Fazendo do aprendizado, uma forma de melhorar."

app.route('/:identificador').delete( (req, res) => {
    res.send(req.params.identificador);
});*/


/* Modifying the variable in the aplication

let subtitle = "Fazendo do aprendizado, uma forma de melhorar."

app.route('/').get( (req, res) => res.send(subtitle));

app.route('/').put((req,res) => {
    subtitle = req.body.author
    res.send(subtitle)
});*/

//app.route('/').get( (req, res) => res.send("hello"));

// Method Post
//middleware
//app.use(express.json());

//app.route('/').post( (req, res) => res.send(req.body) );

const start = function() {
    let timeOut = 1000;
    let runing = () => console.log("Runing!");
    let interval = setInterval(runing, timeOut);
    setTimeout ( () => clearInterval(interval), 1001);
};

start()