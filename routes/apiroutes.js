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