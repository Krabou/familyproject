const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    author_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    ad_id: {
        type: Schema.Types.ObjectId,
        ref: "Ad",
    },
    date: Date,
    reason: String
});

const ReportModel = mongoose.model("Report", reportSchema);

module.exports = ReportModel;