const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
	Workout.find({})
		.then((data) => {
			// console.log(typeof data);
			res.json({ data });
		})
		.catch((err) => res.json(err));
});

module.exports = router;
