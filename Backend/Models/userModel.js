const mongoose = require("mongoose");

// 1 - create Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "auther First Name must be required"],
      minlength: [3, "to Short First Name, must be at least 3 characters"],
      maxlength: [50, "First Name is too long, maximum 50 characters"],
    },
    slug: { type: String },
    email: {
      type: String,
      required: [true, "User Email Must Be Required"],
      minlength: [5, "to Short First Name, must be at least 10 characters"],
      maxlength: [50, "Email is too long, maximum 50 characters"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "User Email Must Be Required"],
      minlength: [5, "to Short First Name, must be at least 5 characters"],
      maxlength: [100, "Email is too long, maximum 50 characters"],
    },
    image: {
      type: String,
    },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    slug: {
      type: String,
      lowercase: true,
    },
  },
  { timestamps: true }
);

// 2 - Create model

const UserModle = mongoose.model("User", userSchema);

// ========================================================================

module.exports = UserModle;
