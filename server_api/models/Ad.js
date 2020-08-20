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
    starts_at: Date,
    ends_at: Date,
    is_active: Boolean,
    description:String,
    content:String,
});

const AdModel = mongoose.model("Ad", adSchema);

module.exports = AdModel;