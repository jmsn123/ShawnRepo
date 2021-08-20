const router = require("express").Router();
const issueroutes = require("./issueTracker");

router.use("/issue", issueroutes);

module.exports = router;
