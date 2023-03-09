const Planet = require("../models/Planet")
const Satelite = require("../models/Satelites")
const Cap = require('../models/Cap')
const Spaceship = require("../models/Spaceship")

Planet.hasMany(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" })
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" })

Cap.belongsToMany(Spaceship, {
  foreingKey: 'capId',
  through: 'capSpaceShip',
  as: 'spaceships',
})

Spaceship.belongsToMany(Cap, {
  foreingKey: 'spaceshipId',
  through: 'capSpaceShip',
  as: 'caps',
})

module.exports = { Planet, Satelite }