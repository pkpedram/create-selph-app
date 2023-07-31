
const { upload } = require('../../core/middlewares/multer')
const { encrypt } = require('../../core/utils/hasher')
const { generateJwtToken } = require('../../core/utils/jwt')
const { generateFileName } = require('../../core/utils/multer')
const User = require('../../models/User')

const usersController = {
    postBasic: {
        middlewares: [
            upload('user_avatar_').single('avatar')
        ],
        controller: async (req, res, next) => {
      
            try {
                let user = new User({
                    avatar: generateFileName(req.file, 'user_avatar_'),
                    password: encrypt(req.body.password),
                    role: 'basic',
                    username: req.body.username,
                    email: req.body.email,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                  
                });
            await user.save()
            console.log(user)
           
        
            return res.send(user)
            } catch (error) {
                console.error(error)
                res.send(error)
                next()
            }
        }
    },
    login: {
        middlewares: [

        ],
        controller: async (req, res, next) => {
            try {
                let user = await User.findOne({username: req.body.username, password: encrypt(req.body.password)})
                console.log(user)
                if(user?._id){
                    let token = generateJwtToken({username: user.username, role: user.role, userId: user.id})
                    return res.send({token: token})
                }else{
                    res.sendStatus(404)
                }
            } catch (error) {
             console.error(error)
             next()   
            }
        }
    },
    loginAdmin: {
        middlewares: [],
        controller: async (req, res, next) => {
            try {
                let user = await User.findOne({username: req.body.username, password: encrypt(req.body.password)})
                console.log(user)
                if(user?._id && user?.role == 'admin'){
                    let token = generateJwtToken({username: user.username, role: user.role, userId: user.id})
                    return res.send({token: token})
                }else{
                    res.sendStatus(404)
                }
            } catch (error) {
             console.error(error)
             next()   
            }
        }
    }
   
}

module.exports = usersController
