const express = require('express')

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
router.post('/', (req, res) => {
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