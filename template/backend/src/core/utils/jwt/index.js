const jwt = require('jsonwebtoken')

const generateJwtToken = (data) => {
    return jwt.sign(data, process.env.JWT_TOKEN_SECRET, {expiresIn: '20000s'})
}




module.exports = {
    generateJwtToken,
}