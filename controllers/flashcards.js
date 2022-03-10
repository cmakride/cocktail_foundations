import { Cocktail } from "../models/cocktail.js";
import { Ingredient } from "../models/ingredient.js";


function index(req,res){


//!Find all the cocktails that have bartender ID of the User. That User's Cocktails
Cocktail.find({bartender : req.user.profile})

.then(cocktails =>{
  res.render('flashcards/index',{
    cocktails,
    title: 'flashcards'
  })
})



}

export{
  index
}