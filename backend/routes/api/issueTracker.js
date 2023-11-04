const router = require("express").Router();
const path = require("path");
// this is how we get our data
const { Issue } = require("../../models");

router.get("/", async(req, res) => {
    console.log("GET /api/issue-tracker");
    model.Issue.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});
router.post("/addIssue", async(req, res) => {
    console.log("POST /api/issue/addIssue");
    const issue = new Issue({...req.body });
    const newIssue = await issue.save();
    return res.status(201).json(newIssue);
});

module.exports = router;