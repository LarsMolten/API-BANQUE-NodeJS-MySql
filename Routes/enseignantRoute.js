const express = require("express")
const router = express.Router()

const enseignantController = require("../contoller/enseignantController")

router.get("/", enseignantController.getAll)

router.get("/:id", enseignantController.getById)

router.post("/", enseignantController.create)

router.put("/:id", enseignantController.update)

router.delete("/:id", enseignantController.delete)

module.exports = router