const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const categoryModle = require("../Models/categoryModle");

// Get all categories
exports.getCategories = asyncHandler(async (req, res) => {
  const categories = await categoryModle.find();
  res.status(200).json({ data: categories });
});

// Create a new category
exports.createCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const category = await categoryModle.create({ name: name, slug: slugify(name) });
  res.status(201).json({ data: category });
});

// Get a specific category by ID
exports.getCategoryById = asyncHandler(async (req, res) => {
  const category = await categoryModle.findById(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.status(200).json({ data: category });
});

// Update a category by ID
exports.updateCategory = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const slug = slugify(name);

  const category = await categoryModle.findByIdAndUpdate(
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
  const category = await categoryModle.findByIdAndDelete(req.params.id);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.status(200).json({ message: "Category deleted successfully" });
});