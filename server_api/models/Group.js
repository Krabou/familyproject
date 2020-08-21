const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  messages:[{
        type: Schema.Types.ObjectId,
        ref: "Message",
  }],
  name:String,
  members:[{
        type: Schema.Types.ObjectId,
        ref: "User"
  }]
});

const GroupModel = mongoose.model("Lang", groupSchema);

module.exports = GroupModel;