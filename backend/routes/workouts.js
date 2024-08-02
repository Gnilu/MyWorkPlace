const express = require('express')
const workout = require('../models/workoutModel')

const router = express.Router()

//get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

//get a single workouts
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workouts'})
})

//POST a new workouts
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }

    res.json({mssg: 'POST a new workouts'})
})

//DELETE a new workouts
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workouts'})
})

//UPDATE a new workouts
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a new workouts'})
})


module.exports = router