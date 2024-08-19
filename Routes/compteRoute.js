const express = require("express")
const compte = express.Router()

const compteController = require("../contoller/compteController")

compte.get("/", compteController.getAllCompte)

compte.get("/:id", compteController.getByIdCompte)

compte.post("/", compteController.createCompte)

compte.put("/:id", compteController.updateCompte)

compte.delete("/:id", compteController.deleteCompte)


module.exports = compte