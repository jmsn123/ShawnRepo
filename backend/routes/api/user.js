const router = require("express").Router();
const path = require("path");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth")

// this is how we get our data
const model = require("../../models");
router.get("/me", auth, async (req, res) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({ message: "Error in Fetching user" });
  }
});
router.get("/signup",
[check("username","Please enter a Valid Username")
    .not()
    .isEmpty(),
    check("email","Please enter a Valid email").isEmail(),
    check("password","Please enter a Valid password")
    .isLength({
        min:6
    })
] ,async (req, res) => {
  console.log("GET /api/signup");
  const errors = validationResult(req);
  if(!errors.isEmpty()){
      return res.status(400).json({
          errors:errors.array,
          msg:"new"
      });
  }
  const {username,email,password} = req.body;
  try{
  let user = await model.User.findOne({
      email
  })
  if(!user){
      return res.status(401).json({
          message:"user exists!"
      })
  }
  user = new model.User(req.body)

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);
  await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                    res.status(200).json({
                        token
                    });
                }
            );
  }catch(err){
        console.log(err.message);
        res.status(500).send("Error in Saving");
  }
  model.Issue.find()
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
router.post("/login",[
    check("email","please enter a valid email").isEmail(),
    check("password","please enter a valid password").isLength({min:6})
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
    }     
    const {email,password} = req.body;
    try {
        let user = await model.User.findOne({
            email
        })
        if(!user)Pleaseres.status(400).json({
            message:"user does not exist"
        })
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch)
        return res.status(400).json({
            message:"Incorrect PAssowrd ! "

        })
        const data = {
            user:{
                id:user.id
            }
        };
        jwt.sign(
            data,
            "randomString",
            {
                expiresIn:3600
            },(err,token)=>{
                res.status(200).json({
                    token
                })
            }
        )
    }catch(err){
        console.error(e);
        res.status(500).json({
            message:"Server Error"
        })
    }
})

module.exports = router;