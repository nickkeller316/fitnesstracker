const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
});

app.use(require("./routes/apiroutes"));
// app.use(require("./routes/htmlRoutes"));

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
