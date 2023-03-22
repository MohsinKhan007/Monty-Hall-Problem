import { getResults } from '../controllers'
import express from 'express'
const router = express.Router()

router.post('/', getResults)

export default router
