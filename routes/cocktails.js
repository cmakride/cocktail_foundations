import { Router } from "express"
import * as cocktailsCtrl from "../controllers/cocktails.js"
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

//GET = localhost:3000/cocktails
router.get('/',cocktailsCtrl.index)

router.get('/new',cocktailsCtrl.new)

//POST - localhost:3000/cocktails
//!NEED TO CREATE ANOTHER MIDDLEWARE TO CHECK IF A USER is logged in
router.post('/',cocktailsCtrl.create)


export{
  router
}