import mongoose from "mongoose";
const Schema = mongoose.Schema;

mongoose.model(
	"MountBehaviors",
	new Schema({
		id: Number,
		nameId: String,
		descriptionId: String
	})
);