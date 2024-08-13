const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const categoryModel = require("../Models/categoryModle"); // Correct the typo

// Get all categories

exports.getCategories = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  // Fetch categories with pagination
  const categories = await categoryModel.find().skip(skip).limit(limit);

  // Fetch total count of categories
  const totalCategories = await categoryModel.countDocuments();

  res.status(200).json({
    count: categories.length,
    total: totalCategories,
    data: categories,
  });
});


// Create a new category
exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await categoryModel.create({ name: name, slug: slugify(name) });
  res.status(201).json({ data: category });
});

// Get a specific category by ID
exports.getCategoryById = asyncHandler(async (req, res) => {
  const category = await categoryModel.findById(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.status(200).json({ data: category });
});

// Update a category by ID
exports.updateCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;

  // Check if name is provided before using slugify
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  const slug = slugify(name);

  const category = await categoryModel.findByIdAndUpdate(
    req.params.id,
    { name: name, slug: slug },
    { new: true }
  );

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.status(200).json({ data: category });
});

// Delete a category by ID
exports.deleteCategory = asyncHandler(async (req, res) => {
  const category = await categoryModel.findByIdAndDelete(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.status(200).json({ message: "Category deleted successfully" });
});