const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema({
    provider: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    type: {
        type: String,
        enum: ["offre", "demande"]
    },
    release_date: {
        type: Date,
        default: Date.now()
    },
    date: Date,
    starts_at: String,
    ends_at: String,
    is_active: {
        type: Boolean,
        default: true
    },
    title: String,
    description: String,
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }]
});

const AdModel = mongoose.model("Ad", adSchema);

module.exports = AdModel;