const express = require("express");
const {getUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,}  = require("../controllers/userController")
const router = express.Router();
router.route("/").get(getUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
module.exports = router