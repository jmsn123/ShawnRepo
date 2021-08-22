const router = require("express").Router();
const issueroutes = require("./issueTracker");
const projectroutes = require("./project");

router.use("/issue", issueroutes);
router.use("/project", projectroutes);

module.exports = router;
