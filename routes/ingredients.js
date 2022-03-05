import { Router } from 'express'
import * as ingredientCtrl from "../controllers/ingredients.js"

const router = Router()

//POST - localhost:3000/ingredients
router.post("/",ingredientCtrl.createIngredient)

//GET - localhost:3000/ingredients
router.get("/",ingredientCtrl.ingredientIndex)

//DELETE - localhost:3000/ingredients/:id
router.delete("/:id",ingredientCtrl.deleteIngredient)

export {
  router
}