const express = require("express")
const transaction = express.Router()

const transactionController = require("../contoller/transactionController")

transaction.get("/", transactionController.getAllTransaction)

transaction.get("/:id", transactionController.getByIdTransaction)

transaction.post("/", transactionController.createTransaction)

transaction.put("/:id", transactionController.updateTransaction)

transaction.delete("/:id", transactionController.deleteTransaction)

module.exports = transaction