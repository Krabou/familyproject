const router = new require("express").Router();
const UserModel = require("./../models/User");

router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find()
    .populate("lang_spoken_id")
    .populate("friends");
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id)
    .populate("lang_spoken_id")
    .populate("friends");
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// POST : /users (créer un user)
router.post("/", async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body);   
    res.json(newUser);
  } catch (err) {
    next(err);
  }
});

// DELETE : /users/id (supprimer un user de la bdd grâce à son _id)
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id); 
    res.json(deletedUser);
  } catch (err) {
    next(err);
  }
});

// PATCH : /users/id (mettre à jour une annonce)
router.patch("/edit_user/:id", async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id, // 
      req.body, 
      {
        new: true
      }
    );
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;