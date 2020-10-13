const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    offer: {
        type: Schema.Types.ObjectId,
        ref: "Ad",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    date: Date,
    recommandation: String
});

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;