const jwt = require('jsonwebtoken')

const authenticateJwtToken = (roles = []) => (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    


  if(roles.length > 1){
    if(token == null) return res.sendStatus(401)
    jwt.verify(token, process.env.JWT_TOKEN_SECRET, (err, user) => {
        console.error(err)
        if(err) return res.status(403).send({messge: "Sorry, You Don't have access to this part.", err:err})

        if(user.role == 'admin'){
            req.user = user
        }else{

                if(user.role == 'basic' && roles.includes('user')){
                    req.user = user
                }
                else if(roles.includes('self')){
                    req.user = user
                }
                else{
                   return res.status(403).send({messge: "Sorry, You Don't have access to this part.", err:err})
                }
            
        }

      

        next()
    } )
  }else{
    next()
  }
}



module.exports = {
    authenticateJwtToken
}