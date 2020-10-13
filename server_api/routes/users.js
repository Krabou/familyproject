const router = new require("express").Router();
const UserModel = require("./../models/User");
const uploader = require("./../config/cloudinary");
// bcrypt est une librairie de cryptographie utilisée ici pour encrypter les mots de passe
const bcrypt = require("bcrypt");


router.get("/", async (req, res, next) => {
  try {
    const users = await UserModel.find()
      .populate("lang_spoken_id")
      .populate("friends")
      .populate("friend_requests_sent")
      .populate("friend_requests_received");
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
      .populate("friend_requests_sent")
      .populate("friend_requests_received");
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

router.patch("/form_edit_parameters/password/:id", (req, res, next) => {
  const updatedUser = req.body; // on stocke les infos postées dans cette constante
  if (
    // on vérifie la présence de tous les champs requis
    !updatedUser.oldPassword ||
    !updatedUser.password
  ) {
    console.log("remplit tout les champs")
    return res.status(422).json({
      msg: "Merci de remplir tous les champs.",
      level: "warning",
    });
  }
  UserModel // on cherche l'user par son id
    .findById(req.params.id) // pour pouvoir comparer l'ancien pot de passe
    .then((user) => {
      // si la promesse est tenue, on vérifie que oldPassword est correct
      const oldPasswordchecked = bcrypt.compareSync(
        updatedUser.oldPassword, // password provenant du form "texte plein"
        user.password // password stocké en bdd (encrypté)
      ); // compareSync retourne true || false

      if (oldPasswordchecked  === false) {
        console.log("ton mot de passe est incorrect")
        return res.status(422).json({
          msg: "Mot de passe incorrect.",
          level: "warning",
        });
      } else {
        // si oldPassword renseigné est correct
        const salt = bcrypt.genSaltSync(10); // on génère un sel pour renforcer le hashage
        const hashed = bcrypt.hashSync(updatedUser.password, salt); // encrypte nouveau password

        user.password = hashed; // on remplace le mot de passe "en clair" par le hash
        user.save(); // et enfin on update le document user récupéré de la bdd avec les nouvelles infos
        // res.json(user);
        console.log("youpi mot de passe changé")
      }
    })
    .catch(next);
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