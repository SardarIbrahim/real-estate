import express from 'express'

const router = express.Router()

router.route('/').get((req, res) => {
  res.json('Hey its me')
})

export default router
