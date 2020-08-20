const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    ad_id: {
        type: Schema.Types.ObjectId,
        ref: "Ad",
    },
    message: [{
        message: String,
        receiver_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        sender_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        date: Date,
    }]

});

const MessageModel = mongoose.model("Message", messageSchema);

module.exports = MessageModel;