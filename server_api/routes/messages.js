const router = new require("express").Router();
const MessageModel = require("../models/Message");

// GET : /messages/ (récuperer les messages de la bdd)
router.get("/", async (req, res, next) => {
    try {
        const messages = await MessageModel.find().sort({
                date: -1
            })
            .populate("ad_id")
            .populate({
                path: "message",
                populate: [{
                    path: "receiver_id"
                }]
            })
            .populate({
                path: "message",
                populate: [{
                    path: "sender_id"
                }]
            });
        res.json(messages);
    } catch (err) {
        next(err);
    }
});

// GET : /messages/id (récuperer un message par son id)
router.get("/:id", async (req, res, next) => {
    try {
        const message = await MessageModel.findById(req.params.id)
            .populate("ad_id")
            .populate({
                path: "message",
                populate: [{
                    path: "receiver_id"
                }]
            })
            .populate({
                path: "message",
                populate: [{
                    path: "sender_id"
                }]
            });
        res.json(message);
    } catch (err) {
        next(err);
    }
});

// POST : /messages (créer un message)
router.post("/", async (req, res, next) => {
    try {
        const newMessage = await MessageModel.create(req.body); // req.body contient TOUJOURS les informations postées
        res.json(newMessage);
    } catch (err) {
        next(err);
    }
});

// DELETE : /message/id (supprimer un message de la bdd grâce à son _id)
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedMessage = await MessageModel.findByIdAndDelete(req.params.id); // req.params.id correspond à l'id passé en URL
        res.json(deletedMessage);
    } catch (err) {
        next(err);
    }
});

//PENSER A VERIFIER NE MARCHE PAS SUR POSTMAN
// PATCH : /messages/id (mettre à jour un message)
router.patch("/:id", async (req, res, next) => {
    try {
        const updatedMessage = await MessageModel.findByIdAndUpdate(
            req.params.id, // req.params.id correspond à l'id passé en URL
            req.body, // les données de mise à jour
            {
                new: true
            } // cette option est requise si vous souhaitez récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
        );
        res.json(updatedMessage);
    } catch (err) {
        next(err);
    }
});

module.exports = router;