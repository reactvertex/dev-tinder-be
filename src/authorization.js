exports.adminAuthorization = (req, res, next) =>{
  const token = "xyz";
  const authorization = token === "xyz";
  if(!authorization){
   res.status(401).send("user not authorized")
  }else{
    next()
  }
}

exports.userAuthorization = (req, res, next) =>{
  const token = "xyz";
  const authorization = token === "xyz";
  if(!authorization){
   res.status(401).send("user not authorized")
  }else{
    next()
  }
}

