import { Cocktail } from "../models/cocktail.js";
import { Ingredient } from "../models/ingredient.js";
import { Profile } from "../models/profile.js"



function index(req, res) {
  Cocktail.find({})
    .then(cocktails => {
      res.render('cocktails/index', {
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

//!SEARCH BAR INDEX
function searchIndex(req, res) {

  console.log(req.query.name)
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Sorting by name
  Cocktail.find(modelQuery)
    .sort("name")
    .exec(function (err, cocktails) {
      if (err) return next(err)
      // Passing students and name, for use in the EJS
      res.render("cocktails/index", {
        cocktails,
        name: req.query.name,
        title: "Search"

      })
    })
}
//! End of search bar index

function newCocktail(req, res) {
  res.render('cocktails/new', {
    title: "Add Cocktail"
  })
}


function create(req, res) {
  console.log(req.user)
  //? if not logged in can still create a taco just name will not be shown
  if (req.user?.profile) {
    req.body.bartender = req.user.profile
  }
  Cocktail.create(req.body)
    .then(cocktail => {
      console.log(cocktail)
      res.redirect('/cocktails')
    })
    .catch(err => {
      console.log(err)
      res.redirect("/cocktails")
    })

}

function show(req, res) {
  
  Cocktail.findById(req.params.id)
    .populate("ingredients")
    .populate("bartender")
    .then(cocktail => {
      res.render('cocktails/show', {
        cocktail,
        title: "Show Cocktail"
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect("/cocktails")
    })
}

function edit(req, res) {
  Cocktail.findById(req.params.id)
    .populate("ingredients")
    .exec(function (err, cocktail) {
      Ingredient.find({ _id: { $nin: cocktail.ingredients } }, function (err, ingredientsNotInRecipe) {

        res.render('cocktails/edit', {
          title: "Cocktail Edit",
          cocktail,
          ingredientsNotInRecipe
        })
      })
    })
}

function update(req, res) {
  console.log("REQ BODY", req.body)
  console.log("REQ PARAMS", req.params)
  Cocktail.findById(req.params.id)
    .then(cocktail => {
      if (cocktail.bartender.equals(req.user.profile._id)) {
        cocktail.updateOne(req.body, { new: true })
          .then(cocktail => {
            res.redirect(`/cocktails/${req.params.id}`)
          })
      } else {
        throw new Error("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect("/cocktails")
    })
}

function addToIngredients(req, res) {
  Cocktail.findById(req.params.id)
    .then(cocktail => {
      if (cocktail.bartender.equals(req.user.profile._id)){
      cocktail.ingredients.push(req.body.ingredientId)
      cocktail.amounts.push(req.body.amount)
      cocktail.save()
        .then(() => {
          res.redirect(`/cocktails/${cocktail._id}/edit`)
        })
      }else{
        throw new Error("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect("/cocktails/")
    })
}

function deleteRecipeIngredient(req, res) {
  console.log("Cocktail ID", req.params.id)
  console.log("INGREDIENT INDEX", req.params.idx)
  Cocktail.findById(req.params.id)
    .then(cocktail => {
      if(cocktail.bartender.equals(req.user.profile._id)){
      cocktail.amounts.splice(parseInt(req.params.idx), 1)
      cocktail.ingredients.splice(parseInt(req.params.idx), 1)
      cocktail.save()
        .then(() => {
          res.redirect(`/cocktails/${cocktail._id}/edit`)
        })
      }else{
        throw new Error("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect("/cocktails")
    })
}

function deleteCocktail(req, res) {
  Cocktail.findById(req.params.id)
    .then(cocktail => {
      if (cocktail.bartender.equals(req.user.profile._id)) {
        cocktail.delete()
          .then(cocktail => {
            res.redirect('/cocktails')
          })
      } else {
        throw new Error("NOT AUTHORIZED")
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect("/cocktails")
    })

}



export {
  index,
  create,
  newCocktail as new,
  show,
  edit,
  addToIngredients,
  update,
  deleteRecipeIngredient,
  deleteCocktail,
  searchIndex,

}