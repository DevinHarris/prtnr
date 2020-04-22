const express = require('express');
const router = express.Router();
const { getRoot, getUser, getUsers, createUser, updateUser, deleteUser } = require('../controllers/prtnr');

// reordered Express routes because Express uses routes based on how they are defined

router.get('/prtnrs', getUsers);
router.get('/', getRoot);

// get a user
router.get('/:username', getUser);
router.post('/create', createUser);
router.put('/:username', updateUser);
router.delete('/:username', deleteUser);

module.exports = router;