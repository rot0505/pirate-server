import express from 'express'

const {
  authenticate,
  authError
} = require('../middlewares/auth')

const router = express.Router()

const authCtrl = require('../controllers/auth')

router.post('/login', authCtrl.login)

router.get('/test', [authenticate, authError], (req, res, next) => res.json({ 'msg': "it's working" }))

router.get('/me', [authenticate, authError], authCtrl.getMe)

module.exports = router