const jwt = require('jsonwebtoken')

const authenticateJwtToken = (roles = []) => (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
        console.error(err)
        if(err) return res.status(403).send({messge: 'شما دسترسی به این بخش ندارید'})
        if(roles.length !== 0 ){
           if(roles.find(itm => itm == user.role)){
            console.log('user',user)
            req.user = user
           }else{
            return  res.status(403).send({messge: 'شما دسترسی به این بخش ندارید'})
           }
        }
        else{
            console.log('no role', user)
            req.user = user

        }

        next()
    } )
}



module.exports = {
    authenticateJwtToken
}