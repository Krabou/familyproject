const router = new require("express").Router();
const ReviewModel = require("./../models/Review");

// GET : /reviews/ (récuperer les reviews de la bdd)
router.get("/", async (req, res, next) => {
  try {
    const reviews = await ReviewModel.find().sort({
        date: -1
      })
      .populate("offer_id")
      .populate("user_id");
    res.json(reviews);
  } catch (err) {
    next(err);
  }
});

// GET : /reviews/id (récuperer une review par son id)
router.get("/:id", async (req, res, next) => {
  try {
    const review = await ReviewModel.findById(req.params.id)
      .populate("offer_id")
      .populate("user_id");
    res.json(review);
  } catch (err) {
    next(err);
  }
});

// POST : /review (créer une review)
router.post("/", async (req, res, next) => {
  try {
    const newReview = await ReviewModel.create(req.body); // req.body contient TOUJOURS les informations postées
    res.json(newReview);
  } catch (err) {
    next(err);
  }
});

// DELETE : /reviews/id (supprimer une reviews de la bdd grâce à son _id)
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedReview = await ReviewModel.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
    res.json(deletedReview);
  } catch (err) {
    next(err);
  }
});

// PATCH : /reviews/id (mettre à jour une review)
router.patch("/:id", async (req, res, next) => {
  try {
    const updatedReview = await ReviewModel.findByIdAndUpdate(
      req.params.id, // req.params.id correspond à l'id passé en URL
      req.body, // les données de mise à jour
      {
        new: true
      } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
    );
    res.json(updatedReview);
  } catch (err) {
    next(err);
  }
});

module.exports = router;