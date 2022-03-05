import { Cocktail } from "../models/cocktail.js";
import { Ingredient } from "../models/ingredient.js";

function index(req, res) {
  Cocktail.find({})
  .then(cocktails => {
    res.render('cocktails/index',{
      cocktails,
      title: "All Cocktails"
    })
  })
  //!Errors
  .catch(err => {
    console.log(err)
    res.redirect("/cocktails")
  })
  //if there is a problem catch that problem and send the error to console
}

function create(req,res){
  console.log("SANITY")
}

export{
  index,
  create
}