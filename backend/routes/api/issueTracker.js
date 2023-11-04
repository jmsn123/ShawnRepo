const router = require("express").Router();
const path = require("path");
// this is how we get our data
const { Issue } = require("../../models");

router.get("/", async(req, res) => {
    console.log("GET /api/issue-tracker");
    Issue.find()
        .then((data) => {
            res.status(201).json(data);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});
router.post("/addissue", async(req, res) => {
    console.log("POST /api/issu-tracker/add");
    const newIssue = new Issue({...req.body });
    const addIssue = await newIssue.save();
    res.status(201).json({ addIssue });
});
router.put("/issue/:id", async(req, res) => {
    const { id } = req.params;
    await Issue.updateOne({ id }, req.body);
    const updatedIssue = await Issue.findById(id);
    return res.status(200).json(updatedIssue);
});

module.exports = router;