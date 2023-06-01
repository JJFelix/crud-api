import express from 'express'
import {createUser, deleteUser, getUserByID, getUsers, updateUser} from '../controllers/user-controllers.js'

const router = express.Router()

router.get('/',getUsers)

router.post('/',createUser)

router.get('/:id',getUserByID)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

// module.exports = router
export default router