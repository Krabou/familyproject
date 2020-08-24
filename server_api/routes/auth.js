const router = new require("express").Router();
const UserModel = require("./../models/User");


// POST : /users (créer un user)
router.post("/inscription", async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body);   
    res.json(newUser)
   
  } catch (err) {
    next(err);
  }
  
});





module.exports = router;