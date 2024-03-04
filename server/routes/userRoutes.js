const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { mockUsers } = require("../controllers/userController");

// const UserController = require('../controllers/userController');
router.get("/", (req, res) => {
  res.json(mockUsers); 
});
router.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = mockUsers.find((user) => user.id === parseInt(userId));
  if (user) {
    res.json(user); 
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// router.post('/signup', UserController.signup);
// router.post('/login', UserController.login);
// router.get('/:userId', UserController.getUser);
// router.put('/:userId', UserController.updateUser);
// router.delete('/:userId', UserController.deleteUser);

module.exports = router;
