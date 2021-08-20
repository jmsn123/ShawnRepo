const router = require("express").Router();
const path = require("path");
// this is how we get our data
const workout = require("../../models");

router.get("/", async (req, res) => {
  console.log("GET /api/issue-tracker");
  workout.Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
