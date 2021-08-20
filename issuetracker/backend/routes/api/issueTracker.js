const router = require("express").Router();
const path = require("path");
const Model = require('../../models')
// this is how we get our data
// import models to look through data 
 
//  create needs to be added 
router.post("/", async (req,res)=>{
  console.log("POST /API/CREATE")
  	Model.Issue.create({
		// name : req.body.name,
		// salary : req.body.salary,
		// age : req.body.age
	}, function(err, employee) {
		if (err)
			res.send(err);
 
		// get and return all the employees after newly created employe record
		Employee.find(function(err, employees) {
			if (err)
				res.send(err)
			res.json(employees);
		});
	});
})
router.get("/", async (req, res) => {
  console.log("GET /api/issue-tkracker");
  try {
   const issues = await Model.Issue.find();
   res.json(issues)
  } catch (error) {
    res.status(500).json({message: error.message})
    
  }
  

})
router.get("/:id", async (req,res)=>{
  console.log("GET /api/issue-tracker/id");
  const id = req.params.id
  try{
    const issue = await Model.Issue.findById(id)
    res.json(issue)
  }catch(err){
    res.status(500).json({message: error.message})
  }
})

router.put("/:id" , async (req,res)=>{
  console.log("PUT /api/issue-tracker/id")
  // updates issue
  const id = req.params.id;
  let data = {
    name:req.body.name
  }
  try{
    const issue = await Model.Issue.findOneAndUpdate(id,data)
    res.json(issue)
  }catch(err){
    res.status(500).json({message: error.message})
  }
})
router.delete('/:id',async function(req, res) {
	console.log("deleting",req.params.id);
	let id = req.params.id
  try {
	const deleteMe = await Model.Issue.remove({
		_id : id
	});
    res.json({ message: "User has been deleted" });
  }catch(err){
    res.status(500).json({message: error.message})
  }
});
module.exports = router;
