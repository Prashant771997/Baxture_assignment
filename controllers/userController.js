const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const { mongo, default: mongoose } = require("mongoose");
const ObjectId = require('mongoose').Types.ObjectId
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createUser = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { username, age, hobbies } = req.body;
  if (!username || !age || !hobbies) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const user = await User.create({
    username,
    age,
    hobbies,
    
  });

  res.status(201).json(user);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getUser = asyncHandler(async (req, res) => {
  if(mongoose.isValidObjectId(String(req.params.id)) === false){
    res.status(400);
    throw new Error("Invalid ID")
  }
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  
  
  res.status(200).json(user);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateUser = asyncHandler(async (req, res) => {
  if(mongoose.isValidObjectId(String(req.params.id)) === false){
    res.status(400);
    throw new Error("Invalid ID")
  }
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }

  // if (contact.user_id.toString() !== req.user.id) {
  //   res.status(403);
  //   throw new Error("User don't have permission to update other user contacts");
  // }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedUser);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  // if (contact.user_id.toString() !== req.user.id) {
  //   res.status(403);
  //   throw new Error("User don't have permission to update other user contacts");
  // }
  await User.deleteOne({ _id: req.params.id });
  res.status(200).json(user);
});

module.exports = {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};