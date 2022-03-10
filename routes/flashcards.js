import { Router } from "express"
import * as flashcardsCtrl from "../controllers/flashcards.js"
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()

//GET flashcards - localhost:3000/flashcards
router.get('/',isLoggedIn,flashcardsCtrl.index)


export{
  router
}




