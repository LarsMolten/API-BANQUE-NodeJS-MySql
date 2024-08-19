const express = require('express');
const app = express();
var cors = require('cors');

require('dotenv').config();

const clientRouter = require('./Routes/clientRoute');
const compteRouter = require('./Routes/compteRoute');
const transactionRouter = require('./Routes/transactionRoute');

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


// Route d'entrée
app.use("/client", clientRouter);
app.use("/compte", compteRouter);
app.use("/transaction", transactionRouter);




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Lancement du serveur sur le port", PORT);
});
