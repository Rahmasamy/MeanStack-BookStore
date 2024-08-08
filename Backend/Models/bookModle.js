const mongoose = require("mongoose");

// 1 - create Schema
const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "auther First Name must be required"],
      minlength: [3, "to Short First Name, must be at least 3 characters"],
      maxlength: [50, "First Name is too long, maximum 50 characters"],
    },
    img: { type: String ,  required: [true, "title must be required"]

    },
    Author:{ type : String, required: [true, "Author must be required"]

    },
    Category: { type : String ,required: [true, "Category must be required"]

    }
  },
  { timestamps: true }
);

// 2 - Create model

const BookModle = mongoose.model("book", BookSchema);

module.exports = BookModle;