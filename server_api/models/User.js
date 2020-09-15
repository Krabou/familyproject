const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: {
    type: String,
    default: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/512px-User_font_awesome.svg.png"
  },
  username: String,
  first_name: String,
  last_name: String,
  email: String,
  password: {
    min: 4,
    required: true,
    type: String,
  },
  birthdate: Date,
  children_age: [Number],
  friends: [{
    type: [Schema.Types.ObjectId],
    ref: "User"
  }],
  adress: {
    number: Number,
    street: String,
    zipCode: Number,
    city: String,
    country: String,
    // lating: Geocode
  },
  role: {
    type: String,
    enum: ["admin", "editor", "user"],
    default: "user",
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  number_mission:Number,
  lang_spoken_id: {
    type: [Schema.Types.ObjectId],
    ref: "Lang"
  }
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;