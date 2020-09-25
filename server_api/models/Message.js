const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    receiver_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    sender_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: Date,
        default: Date.now
    },
    text: String,
});

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;