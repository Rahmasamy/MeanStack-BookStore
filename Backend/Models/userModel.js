const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcrypt = require("bcrypt");
// 1 - create Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name must be required"],
      trim: true,
      required: [true, "Name must be required"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "User Email Must Be Required"],
      unique: true,
      lowercase: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "User password Must Be Required"],
      mainlength: [6, "Password must be at least"],
      required: [true, "User password Must Be Required"],
      mainlength: [6, "Password must be at least"],
    },
    PasswordChangeedAt: Date,
    PasswordChangeedAt: Date,
    image: {
      type: String,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      enum: ["user", "admin"],
      default: "user",
    },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});


const UserModel = mongoose.model("User", userSchema);

// ========================================================================

module.exports = UserModel;
module.exports = UserModel;
