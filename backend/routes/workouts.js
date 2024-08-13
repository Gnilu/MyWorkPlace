const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//get a single workouts
router.get('/:id', getWorkout)

//POST a new workouts
router.post('/', createWorkout)

//DELETE a new workouts
router.delete('/:id', deleteWorkout)

//UPDATE a new workouts
router.patch('/:id', updateWorkout)


module.exports = router