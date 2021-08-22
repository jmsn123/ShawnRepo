const router = require("express").Router();
const path = require("path");
// this is how we get our data
const model = require("../../models");

router.get("/", async (req, res) => {
  console.log("GET /api/issue-tracker");
  model.Issue.find()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
