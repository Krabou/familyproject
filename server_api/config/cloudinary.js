const cloudinary = require('cloudinary').v2;
const {
  CloudinaryStorage
} = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');

const app = express();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'familyProjectPicture',
});

const parser = multer({
  storage: storage
});
module.exports = parser;
// app.post('/upload', parser.single('image'), function (req, res) {
//   res.json(req.file);
// });