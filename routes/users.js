const controller = require('../controllers/users');

const router = require('express').Router();

//* CRUD Routes /users
router.get('/', controller.getUsers); //? /users
router.get('/:userId', controller.getUser); //? /users/:userId
router.post('/', controller.createUser); //? /users
router.get('/:userId', controller.updateUser); //? /users/:userId
router.get('/:userId', controller.deleteUser); //? /users/:userId

module.exports = router;