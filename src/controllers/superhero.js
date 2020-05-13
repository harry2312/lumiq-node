const { getAllPossibleWords } = require("../helpers");
const superHero = require("../models/superhero");

exports.handleSuperHeroCall = function (req, res) {
  const body = req.body;
  let message = "";
  try {
    if (body && body.length > 0) {
      const combinations = getAllPossibleWords(body);
      for (let element of combinations) {
        if (superHero.getSupreHero(element)) {
          message = `You've reached to ${element}, He's on the way.`;
          break;
        } else {
          message = `No superhero is available at this code.`;
        }
      }
      res.status(200).send({ message });
    } else {
      res.status(400).send({ message });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: "Something went wrong" });
  }
};
