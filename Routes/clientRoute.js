const express = require("express")
const client = express.Router()

const clientController = require("../contoller/clientController")

client.get("/", clientController.getAllClient)

client.get("/:id", clientController.getByIdClient)

client.post("/", clientController.createClient)

client.put("/:id", clientController.updateClient)

client.delete("/:id", clientController.deleteClient)


module.exports = client