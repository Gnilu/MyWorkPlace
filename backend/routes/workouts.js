const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts
} = require('../controllers/workoutController')

const router = express.Router()

//get all workouts
router.get('/', getWorkouts)

//get a single workouts
router.get('/:id', getWorkout)

//POST a new workouts
router.post('/', createWorkout)

//DELETE a new workouts
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workouts'})
})

//UPDATE a new workouts
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workouts'})
})


module.exports = router