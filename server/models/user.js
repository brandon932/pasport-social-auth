var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = new Schema(
  {
  username: String,
  email: String,
  oauth: String
  }
);

module.exports = mongoose.model("users", User);

// mongoose.connect(process.env.MONGO_URI);
