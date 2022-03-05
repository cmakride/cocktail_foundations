import mongoose from "mongoose";

const Schema = mongoose.Schema

const servedInSchema = new Schema({
  glassware: {
    name: String, enum: ["Chilled Martini Glass", "On the Rocks", "Neat", "Chilled Coup Glass", "Highball Glass"],
  },
  icon: { type: String }
}, {
  timestamps: true,
})

const ingredientSchema = new Schema({
  name: { type: Schema.Types.ObjectId, ref: "Ingredient" },
  amount: { type: String },

}, {
  timestamps: true,
})

const cocktailSchema = new Schema({
  name: { type: String },
  ingredients: [ingredientSchema],
  method: { type: String },
  garnish: { type: String },
  servedIn: [servedInSchema],
  image: { type: String },
}, {
  timestamps: true,
})

const Cocktail = mongoose.model("Cocktail", cocktailSchema)

export {
  Cocktail
}