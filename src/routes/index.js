const express = require("express");
const healthCheck = require("../controllers");
const { handleSuperHeroCall } = require("../controllers/superhero");

const router = express.Router();

router.get("/health-check", healthCheck);

router.post("/call-superhero", handleSuperHeroCall);

module.exports = router;
