const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [{
        title: "Espaço nave",
        message: "São utilizadas para viajar fora do planeta."
    },
    {
        title: "Espaço sideral",
        message: "é toda a área física do Universo não ocupada por corpos celestes. No planeta Terra foi definida a Linha de Karman (100km a partir do nível do mar) como o limite entre a Atmosfera Terrestre e o Espaço Sideral ou Interplanetário."
    },
    {
        title: "Mar",
        message: "vasta extensão da água salgada que ocupa a maior parte da superfície terrestre."
    },
    {
        title: "Coração",
        message: "O coração é um órgão muscular oco, em forma de cone e relativamente pequeno: tem mais ou menos o tamanho de um punho fechado e pesa entre 250g e 300g nos adultos. Apoia-se sobre o diafragma e se situa sob o esterno (osso do tórax), no interior do mediastino (linha média da cavidade torácica) e entre os dois pulmões."
    },
]
    const subtitle = "Fazendo do aprendizado, uma forma de melhorar."
    res.render("pages/index", {
        qualitys: items,
        subtitles: subtitle,
    });
});

app.get("/sobre", function (req, res) {
    res.render("pages/about");
});

app.listen(8080);

let timeOut = 1000;
let runing = () => console.log("Runing!");
let interval = setInterval(runing, timeOut);

setTimeout ( () => clearInterval(interval), 1001)

