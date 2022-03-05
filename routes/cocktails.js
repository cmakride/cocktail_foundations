import { Router } from "express"
import * as cocktailsCtrl from "../controllers/cocktails.js"
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

//GET = localhost:3000/cocktails
router.get('/',cocktailsCtrl.index)

//POST - localhost:3000/tacos

//!NEED TO CREATE ANOTHER MIDDLEWARE TO CHECK IF A USER is logged in
router.post('/',isLoggedIn,cocktailsCtrl.create)


export{
  router
}