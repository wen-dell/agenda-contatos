let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());

app.use('/api/contatos', require('./routes/contatos'));

// Middleware de erro genérico
app.use((err, req, res, next) => {
    res.status(500);
    console.log(err);
    res.json({msg: "Ocorreu um erro!"});
});

let server = app.listen(3000, () => {
    let address = server.address().address;
    let port = server.address().port;
    console.log("Servidor iniciado em http://%s:%s", address, port);
})
