const clientController = require("../controllers/client")
const partController = require("../controllers/part")
const partCategoryController = require("../controllers/partCategory")
const placeController = require("../controllers/place")
const sceneController = require("../controllers/scene")
const settingsController = require("../controllers/settings")
const textureController = require("../controllers/texture")
const usersController = require("../controllers/users")

let routes = [
    // {
    //     route: '',
    //     type: '',
    //     middlewares: ,
    //     controler: ,
    // }
    {
        route: '/client',
        type: 'post',
        middlewares: clientController['post']['middlewares'],
        controler: clientController.post.controller
    },
    {
        route: '/client/:id',
        type: 'put',
        middlewares: clientController['put']['middlewares'],
        controler: clientController.put.controller
    },
    {
        route: '/client/app',
        type: 'get',
        middlewares: clientController['getByDomain']['middlewares'],
        controler: clientController['getByDomain']['controller']
    },
    {
        route: '/register',
        type: 'post',
        middlewares: usersController['postBasic']['middlewares'],
        controler: usersController.postBasic.controller
    },
    {
        route: '/login',
        type: 'post',
        middlewares: usersController['login']['middlewares'],
        controler: usersController['login']['controller']
    },
    {
        route: '/login/admin',
        type: 'post',
        middlewares: usersController['loginAdmin']['middlewares'],
        controler: usersController['loginAdmin']['controller']
    },
    {
        route: '/scene',
        type: 'post',
        middlewares: sceneController['post']['middlewares'],
        controler: sceneController['post']['controller']
    },
    {
        route: '/scene',
        type: 'get',
        middlewares: sceneController['getList']['middlewares'],
        controler: sceneController['getList']['controller']
    },
    {
        route: '/scene/:id',
        type: 'get',
        middlewares: sceneController['getById']['middlewares'],
        controler: sceneController['getById']['controller']
    },
    {
        route: '/part',
        type: 'post',
        middlewares: partController['post']['middlewares'],
        controler: partController['post']['controller']
    },
    {
        route: '/part',
        type: 'get',
        middlewares: partController['getList']['middlewares'],
        controler: partController['getList']['controller']
    },
    {
        route: '/part/:id',
        middlewares: partController['getById']['middlewares'],
        type: 'get',
        controler: partController['getById']['controller']
    },
    {
        route: '/part/:id/mainTextures',
        type: 'get',
        middlewares: textureController['getMains']['middlewares'],
        controler: textureController['getMains']['controller']
    },
    {
        route: '/scene/:id/mainParts',
        type: 'get',
        middlewares: partController['getMains']['middlewares'],
        controler: partController['getMains']['controller']
    },
    {
        route: '/textures',
        type: 'post',
        middlewares: textureController['post']['middlewares'],
        controler: textureController['post']['controller']
    },
    {
        route: '/textures',
        type: 'get',
        middlewares: textureController['getList']['middlewares'],
        controler: textureController['getList']['controller']
    },
    {
        route: '/place',
        type: 'post',
        middlewares: placeController['post']['middlewares'],
        controler: placeController['post']['controller']
    },
    {
        route: '/part-category',
        type: 'post',
        middlewares: partCategoryController['post']['middlewares'],
        controler: partCategoryController['post']['controller']
    },
    {
        route: '/part-category',
        type: 'get',
        middlewares: partCategoryController['getList']['middlewares'],
        controler: partCategoryController['getList']['controller']
    },
    {
        route: '/setting',
        type: 'post',
        middlewares: settingsController['post']['middlewares'] ,
        controler: settingsController['post']['controller'],
    },
    {
        route: '/scene-setting',
        type: 'post',
        middlewares:sceneController['postSettings']['middlewares'] ,
        controler: sceneController['postSettings']['controller'],
    },
    {
        route: '/scene-setting',
        type: 'get',
        middlewares:sceneController['getSettings']['middlewares'] ,
        controler: sceneController['getSettings']['controller'],
    }
]

module.exports = routes