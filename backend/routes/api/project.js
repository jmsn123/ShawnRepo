const router = require("express").Router();
const path = require("path");
// this is how we get our data
const model = require("../../models");

router.get("/", async (req, res) => {
  console.log("GET /api/project-tracker");
  model.Project.find()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.get("/:id", async (req, res) => {
  console.log("GET /api/project-tracker/:id");
  model.Project.findById()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.post("/save", async (req, res) => {
  console.log("POST /api/project-tracker/save");

  let newProject = new model.Project(req.body);
  try {
    await newProject.save();
    res.json(newProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.patch("/update/:id", async (req, res) => {
  try {
    const project = await model.Project.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    await project.save();
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.messages });
  }
});
router.delete("/delete/:id", async (req, res) => {
    try {
      const project = await model.Project.findByIdAndDelete(
        req.params.id,);
    if(!project) response.status(404).json({message:"no item found"})
      res.status(200).json({message:"deleted"});
    } catch (err) {
      res.status(500).json({ message: err.messages });
    }
  });
module.exports = router;
