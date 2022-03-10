import mongoose from "mongoose";

const Schema = mongoose.Schema

  //served in options
  //"Chilled Martini Glass", "On the Rocks", "Neat", "Chilled Coup Glass", "Highball Glass"
 

const cocktailSchema = new Schema({
  name: { type: String },
  amounts: [String],
  ingredients: [{ type: Schema.Types.ObjectId, ref: "Ingredient"}],

  method: { type: String, default: "Method" },
  garnish: { type: String, default: "Garnish" },
  servedIn: {type: String, default: "Served In" },
  image: { type: String, default: "Image URL" },
  bartender:{ type: Schema.Types.ObjectId, ref: 'Profile', default: null,},
}, {
  timestamps: true,
})

const Cocktail = mongoose.model("Cocktail", cocktailSchema)

export {
  Cocktail
}