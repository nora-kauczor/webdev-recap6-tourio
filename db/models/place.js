import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: false },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

// on the first run, mongoose.models.Joke is empty so mongoose.model("Joke", jokeSchema) is run;
// on subsequent runs the value of mongoose.models.Joke is a model
const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
