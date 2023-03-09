const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controllers/PlanetController");
const SateliteController = require('../controllers/SateliteController')
const CapController = require('../controllers/CapController');
const SpaceshipController = require("../controllers/SpaceshipController");

// Rotas de Planets
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

//rotas satelites
routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

//rotas capitao
routes.post("/cap", CapController.store)
routes.get("/cap", CapController.index)

//rotas naves
routes.post("/caps/:capId/spaceships", SpaceshipController.store)
routes.get("/caps/:capId/spaceships", SpaceshipController.index)

module.exports = routes;