import { Cocktail } from "../models/cocktail.js";
import { Ingredient } from "../models/ingredient.js";


function index(req,res){
  //!getting an array of every cocktail's ID
let cards = []
Cocktail.find({})

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