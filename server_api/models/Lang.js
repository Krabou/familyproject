const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const langSchema = new Schema({
    label: String,
    code: String
});

const LangModel = mongoose.model("Lang", langSchema);

module.exports = LangModel;