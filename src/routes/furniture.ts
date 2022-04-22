import express from 'express'

const {
  authenticate,
  authError
} = require('../middlewares/auth')

const router = express.Router()

const furnitureCtrl = require('../controllers/furniture')

router.post('/save', furnitureCtrl.save)

router.post('/load', furnitureCtrl.load)

router.post('/remove', furnitureCtrl.remove)

module.exports = router