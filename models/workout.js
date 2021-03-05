const mongoose = require("mongoose");
//just for semantic purposes
const Schema = mongoose.Schema;

//our workout schema, controlling the input into our collection
const workoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: Date.now,
		},
		exercises: [
			{
				type: {
					type: String,
					trim: true,
					required: "Enter an exercise type.",
				},
				name: {
					type: String,
					trim: true,
					required: "Enter an exercise name.",
				},
				duration: {
					type: Number,
					required: "Enter the duration of this exercise.",
				},
				weight: {
					type: Number,
				},
				reps: {
					type: Number,
				},
				sets: {
					type: Number,
				},
				distance: {
					type: Number,
				},
			},
		],
	},
	{ toJSON: { virtuals: true } }
);

//we are using virtual for adding the total duration of a workout
//reduce is used for rounding
workoutSchema.virtual("totalDuration").get(() => {
	return this.exercises.reduce((total, exercise) => {
		return total + exercise.duration;
	}, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
