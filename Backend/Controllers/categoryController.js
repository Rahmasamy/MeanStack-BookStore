// const categoryModle = require("../models/categoryModel");

const slugify = require("slugify");
const categoryModle = require("../Models/categoryModle");

// Get all categories
exports.getCategories = (req, res) => {
  categoryModle
    .find()
    .then((categories) => {
      res.status(200).json({ data: categories });
    })
    .catch((err) => res.status(400).send(err));
};

// Create a new category
exports.createCategory = (req, res) => {
  const name = req.body.name;

  categoryModle
    .create({ name: name, slug: slugify(name) })
    .then((category) => {
      res.status(201).json({ data: category });
    })
    .catch((err) => res.status(400).send(err));
};

// Get a specific category by ID
exports.getCategoryById = (req, res) => {
  categoryModle
    .findById(req.params.id)
    .then((category) => {
      if (!category)
        return res.status(404).json({ message: "Category not found" });
      res.status(200).json({ data: category });
    })
    .catch((err) => res.status(400).send(err));
};

// Update a category by ID
exports.updateCategory = (req, res) => {
  const name = req.body.name;
  const slug = slugify(name);

  categoryModle
    .findByIdAndUpdate(req.params.id, { name: name, slug: slug }, { new: true })
    .then((category) => {
      if (!category)
        return res.status(404).json({ message: "Category not found" });
      res.status(200).json({ data: category });
    })
    .catch((err) => res.status(400).send(err));
};

// Delete a category by ID
exports.deleteCategory = (req, res) => {
  categoryModle
    .findByIdAndDelete(req.params.id)
    .then((category) => {
      if (!category)
        return res.status(404).json({ message: "Category not found" });
      res.status(200).json({ message: "Category deleted successfully" });
    })
    .catch((err) => res.status(400).send(err));
};
