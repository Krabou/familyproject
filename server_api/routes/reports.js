const router = new require("express").Router();
const ReportModel = require("../models/Report");

// GET : /reports/ (récuperer les reports de la bdd)
router.get("/", async (req, res, next) => {
    try {
        const reports = await ReportModel.find().sort({
                date: -1
            })
            .populate("author_id")
            .populate("ad_id");
        res.json(reports);
    } catch (err) {
        next(err);
    }
});

// GET : /reports/id (récuperer un report par son id)
router.get("/:id", async (req, res, next) => {
    try {
        const report = await ReportModel.findById(req.params.id)
            .populate("author_id")
            .populate("ad_id");
        res.json(report);
    } catch (err) {
        next(err);
    }
});

// POST : /report (créer un report)
router.post("/", async (req, res, next) => {
    try {
        const newReport = await ReportModel.create(req.body); // req.body contient TOUJOURS les informations postées
        res.json(newReport);
    } catch (err) {
        next(err);
    }
});

// DELETE : /report/id (supprimer un report de la bdd grâce à son _id)
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedReport = await ReportModel.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
        res.json(deletedReport);
    } catch (err) {
        next(err);
    }
});

// PATCH : /report/id (mettre à jour une annonce)
router.patch("/:id", async (req, res, next) => {
    try {
        const updatedReport = await ReportModel.findByIdAndUpdate(
            req.params.id, // req.params.id correspond à l'id passé en URL
            req.body, // les données de mise à jour
            {
                new: true
            } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
        );
        res.json(updatedReport);
    } catch (err) {
        next(err);
    }
});

module.exports = router;