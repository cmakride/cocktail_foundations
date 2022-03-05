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

function newCocktail(req,res){
  res.render('cocktails/new',{
    title: "Add Cocktail"
  })
}


function create(req,res){
  
  Cocktail.create(req.body)
  .then(cocktail => {
    console.log(cocktail)
    res.redirect('/cocktails')
  })
  .catch(err =>{
    console.log(err)
    res.redirect("/cocktails")
  })

}

export{
  index,
  create,
  newCocktail as new
}