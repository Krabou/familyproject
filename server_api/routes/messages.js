const router = new require("express").Router();
const MessageModel = require("./../models/Message");

// GET : /messages/ (récuperer les messages de la bdd)
router.get("/", async (req, res, next) => {
    try {
        const messages = await MessageModel.find().sort({
                date: -1
            })
            .populate("receiver")
            .populate("sender");
        res.json(messages);
    } catch (err) {
        next(err);
    }
});

// GET : /messages/id (récuperer un message par son id)
router.get("/:id", async (req, res, next) => {
    try {
        const message = await MessageModel.findById({
                receiver_id: req.params.id
            })
            .populate("receiver")
            .populate("sender");
        res.json(message);
    } catch (err) {
        next(err);
    }
});

// GET les messages d'un user par son id
router.get("/sender/:id", async (req, res, next) => {
    try {
        const result = await MessageModel.find({
                "sender": req.params.id
            })
            .populate("receiver")
            .populate("sender");
        res.status(200).json(result);
    } catch (err) {
        console.log("ca ne marche pas")
        next(err);
    }
});

router.get("/receiver/:id", async (req, res, next) => {
    try {
        const result = await MessageModel.find({
                "receiver": req.params.id
            })
            .populate("receiver")
            .populate("sender");
        res.status(200).json(result);
    } catch (err) {
        next(err);
        console.log("aucun message recuperé")
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


module.exports = router;