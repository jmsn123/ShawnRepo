const router = require("express").Router();
const issueroutes = require("./issueTracker");
const projectroutes = require("./project");
const userroutes = require("./user");

router.use("/issue", issueroutes);
router.use("/project", projectroutes);
router.use("/user", userroutes);

module.exports = router;
