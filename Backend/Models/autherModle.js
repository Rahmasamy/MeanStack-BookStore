const mongoose = require("mongoose");

// 1 - create Schema
const autherSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
<<<<<<< HEAD
      required: [true, "Auther first name is required"],
      minlength: [3, "First name is too short, must be at least 3 characters"],
      maxlength: [15, "First name is too long, maximum 15 characters"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Auther last name is required"],
      minlength: [3, "Last name is too short, must be at least 3 characters"],
      maxlength: [15, "Last name is too long, maximum 15 characters"],
      lowercase: true,
      trim: true, // Corrected typo
    },
    fullName: {
      type: String,
      lowercase: true,
      trim: true, // Corrected typo
    },
    DateOfBirth: { type: Date },
    imagePaths: [{ type: String }],
    slug: {
      type: String,
    },
=======
      required: [true, "auther First Name must be required"],
      minlength: [3, "to Short First Name, must be at least 3 characters"],
      maxlength: [50, "First Name is too long, maximum 50 characters"],
    },
    slug: { type: String },
>>>>>>> fa9e1c4 (create data base Schema , finsh part of create auther)
  },
  { timestamps: true }
);

// 2 - Create model

const AutherModle = mongoose.model("Auther", autherSchema);

module.exports = AutherModle;
