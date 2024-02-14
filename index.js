const express = require('express')
const app = express()

require('dotenv').config()

const enseignantRouter = require('./Routes/enseignantRoute')

app.use(express.urlencoded({extended:false}))
// app.use(express.json)

//route 
app.use("/api/v1/enseignant", enseignantRouter)
// app.get('/', (req, res) => {
//     res.send("bonjour")
// })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Lancement du serveur...", PORT )
})