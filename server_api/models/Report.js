const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    // ad_id: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Ad",
    // },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now()
    },
    reason: String
});

const ReportModel = mongoose.model("Report", reportSchema);

module.exports = ReportModel;