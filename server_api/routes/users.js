const router = new require("express").Router();
const UserModel = require("./../models/User");
const uploader = require("./../config/cloudinary");



router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find()
      .populate("lang_spoken_id")
      .populate("friends")
      .populate("demande_ami_envoyee")
      .populate("demande_ami_recues");
    res.json(users);
  } catch (err) {
    next(err);
  }
});



router.get("/:id", async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id)
      .populate("lang_spoken_id")
      .populate("friends")
      .populate("demande_ami_envoyee")
      .populate("demande_ami_recues");
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

// PATCH : /users/id (mettre à jour un utilisateur)
router.patch("/edit_user/:id", async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body, {
        new: true
      }
    );
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

//Demande d'ami
router.patch("/:id", async (req, res, next) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body, {
        new: true
      }
    );
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
});

//Ajout de l'avatar
router.patch(
  "/form_edit_profil/:id/avatar",
  uploader.single("avatar"),
  async (req, res, next) => {
    if (!req.file)
      return res
        .status(401)
        .json({
          msg: "Avatar file object is needed here !!!"
        });

    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        req.params.id, {
          avatar: req.file.path
        }, {
          new: true
        }
      );
      res.json(updatedUser);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;