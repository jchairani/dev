const express = require('express');
const router = express.Router();
const {createUser, getAllUser, deleteUser} = require('../controllers/userController');

//CREATE USER
// router.post('/',createUser);

//GET ALL
router.get('/',getAllUser);

//DELETE USER
router.get('/:id',deleteUser);

module.exports = router;