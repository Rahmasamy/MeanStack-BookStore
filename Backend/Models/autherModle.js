const mongoose = require("mongoose");

// 1 - create Schema
const autherSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "auther First Name must be required"],
      minlength: [3, "to Short First Name, must be at least 3 characters"],
      maxlength: [50, "First Name is too long, maximum 50 characters"],
    },
    slug: { type: String },
  },
  { timestamps: true }
);

// 2 - Create model

const AutherModle = mongoose.model("Auther", autherSchema);




module.exports = AutherModle;
