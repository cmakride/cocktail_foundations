//GET OUT USER
function passUserToView(req,res,next){
  res.locals.user = req.user ? req.user : null
  next()
}
//this will add to your res user every time use res!
//whenever we pass an object for our view to see, this res will have a user

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}




export{
  passUserToView,
  isLoggedIn
}

