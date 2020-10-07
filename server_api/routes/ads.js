const router = new require("express").Router();
const AdModel = require("./../models/Ad");



// GET : /ads/ (récuperer les annonces de la bdd)
router.get("/", async (req, res, next) => {
  try {
    const ads = await AdModel.find().sort({
        _id: -1
      }).limit(100)
      .populate("provider_id");
    res.json(ads);
  } catch (err) {
    next(err);
  }
});

// GET : /ads/ (récuperer les annonces de la bdd d'un utilisateur)
router.get("/user_ads/:id", async (req, res, next) => {
  try {
    const ads = await AdModel.find({
        "provider_id": req.params.id
      }).sort({
        _id: -1
      }).limit(100)
      .populate("provider_id");
    res.json(ads);
  } catch (err) {
    next(err);
  }
});

// GET : /ads/id (récuperer une annonce par son id)
router.get("/:id", async (req, res, next) => {
  try {
    const ad = await AdModel.findById(req.params.id)
      .populate("provider_id");
    res.json(ad);
  } catch (err) {
    next(err);
  }
});

// POST : /ads (créer une annonce)
router.post("/", async (req, res, next) => {
  try {
    const newAds = await AdModel.create(req.body); // req.body contient TOUJOURS les informations postées
    res.json(newAds);
  } catch (err) {
    next(err);
  }
});

// DELETE : /ads/id (supprimer une annonce de la bdd grâce à son _id)
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedAD = await AdModel.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
    res.json(deletedAD);
  } catch (err) {
    next(err);
  }
});

// PATCH : /ads/id (mettre à jour une annonce)
router.patch("/form_edit_ad/:id", async (req, res, next) => {
  try {
    const updatedAd = await AdModel.findByIdAndUpdate(
      req.params.id, // req.params.id correspond à l'id passé en URL
      req.body, // les données de mise à jour
      {
        new: true
      } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
    );
    res.json(updatedAd);
  } catch (err) {
    next(err);
  }
});

module.exports = router;