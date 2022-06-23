const isAuthorized = (req,res,next)=>{
    const isAuthorized=false
    if(isAuthorized) next()
    else res.send('You are not Authorized. Please login.')
}

module.exports = isAuthorized