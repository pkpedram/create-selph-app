

let routes = [
    // {
    //     route: '',
    //     type: '',
    //     middlewares: ,
    //     controller: ,
    // }
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
   
]

module.exports = routes