
const fs = require('fs-extra')

 const createSelphAppFiles = (name) => {
    fs.writeFileSync(`${name}/package.json`, `{
        "name": "${name}",
        "version": "1.0.0",
        "description": "",
        "main": "",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "start": "selph-cli start",
          "start-frontend" : "selph-cli start-frontend"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
          "selph-cli": "^1.0.0"
        }
      }`)
      fs.writeFileSync(`${name}/selph.config.js`, `const config = {
        name: '${name}',
        apiPort: 5000,
        https: false,
        modules: [
            {
                name: 'test',
                model: {
                    title: String,
                    link: {type: String},
                    stepNumber: {type: Number, default: 0}
                }
            }
        ],
        baseModel: {
            isActive: {type: Boolean, default: true},
            created_date: {type: Date, default: new Date()}
        }
    }
    
    module.exports = config
    `)
}


module.exports = {
    createSelphAppFiles,
}