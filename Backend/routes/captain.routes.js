const captainController = require('../controllers/captain.controller')
const express = require('express')
const router = express.Router();
const { body } = require("express-validator")
const authMiddleware = require('../middlewares/auth.middleware')


router.post('/register', [
  body('email').isEmail().withMessage('InvalidEmail'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 character long'),
  body('password').isLength({ min: 6 }).withMessage("passwrord must be at least 6 character long"),
  body('vehicle.color').isLength({ min: 3 }).withMessage("Color must be at least 3 characters long "),
  body('vehicle.plate').isLength({ min: 4 }).withMessage("Plate must be at least 3 charcters long"),
  body('vehicle.capacity').isLength({ min: 1 }).withMessage("Capacity must be at least 1 "),
  body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
],

  captainController.registerCaptain
)

router.post('/login', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({ min: 6 }).withMessage("Password must be 6 characters")
],
  captainController.loginCaptain
)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)



module.exports = router;