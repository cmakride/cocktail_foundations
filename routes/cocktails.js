import { Router } from "express"
import * as cocktailsCtrl from "../controllers/cocktails.js"
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()



//GET - localhost:3000/cocktails
router.get('/',cocktailsCtrl.index)

//GET - localhost:3000/cocktails/search
router.get('/search',cocktailsCtrl.searchIndex)

//GET - localhost:3000/cocktails/new
router.get('/new',isLoggedIn,cocktailsCtrl.new)

//GET - localhost:3000/cocktails/:id
router.get('/:id',cocktailsCtrl.show)

//GET - localhost:3000/cocktails/:id/edit
router.get('/:id/edit',isLoggedIn,cocktailsCtrl.edit)

//PUT After editing a cocktail and click edit button - localhost:3000/cocktails/:id
router.put('/:id',isLoggedIn,cocktailsCtrl.update)

//POST - localhost:3000/cocktails
//!NEED TO CREATE ANOTHER MIDDLEWARE TO CHECK IF A USER is logged in
router.post('/',isLoggedIn, cocktailsCtrl.create)

//POST Adding Ingredient - localhost:3000/cocktails/:id/ingredients
router.post('/:id/ingredients', cocktailsCtrl.addToIngredients)

//DELETE Deleting Ingredient - localhost:3000/cocktails/:id/ingredients/ingredientIndex
router.delete('/:id/ingredients/:idx',cocktailsCtrl.deleteRecipeIngredient)

//DELETE Cocktail - localhost:3000/cocktails/:id
router.delete('/:id',cocktailsCtrl.deleteCocktail)


export{
  router
}