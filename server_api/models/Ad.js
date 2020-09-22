const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema({
    provider_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    type: {
        type: String,
        enum: ["offre", "demande"]
    },
    release_date: Date,
    date: Date,
    starts_at: String,
    ends_at: String,
    is_active: Boolean,
    title: String,
    description: String,
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }]
});

const AdModel = mongoose.model("Ad", adSchema);

module.exports = AdModel;