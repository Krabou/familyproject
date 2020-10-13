const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now()
    },
    text: String,
    title: String
});

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;