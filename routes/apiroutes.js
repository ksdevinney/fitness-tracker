const app = require("express").Router();
const { request } = require("express");
const db = require("../models/workout");

app.get("/api/workouts", function(req, res) {
    db.find()
    .then(function(workout) {
        console.log("get route", workout)
        res.json(workout)
    })
})

app.put("/api/workouts/:id", function(req, res){
    db.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}},{new:true})
    .then(function(workout) {
        console.log("put route", workout)
        res.json(workout)
    })
})

app.post("/api/workouts", function(req, res) {
    db.create(req.body)
    .then(function(workout) {
        console.log("post route", workout)
        res.json(workout)
    })
})

app.get("/api/workouts/range", function(req, res) {
    db.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
    db.find().limit(7)
    .then(function(workout) {
        console.log("get route", workout)
        res.json(workout)
    })
})

module.exports = app;