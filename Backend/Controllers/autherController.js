const AutherModle = require("../Models/autherModle");
const slugify = require("slugify");

exports.getAuthers = (req, res) => {
  res.send("No Authers");
};

exports.createAuther = (req, res) => {
  const firstName = req.body.firstName;

  AutherModle.create({ firstName: firstName, slug: slugify(firstName) })
    .then((auther) => {
      res.status(201).json({ data: auther });
    })
    .catch((err) => res.status(400).send(err));
}


