const Planet = require("../models/Planet");
const Satelite = require("../models/Satelites")

Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planet" })