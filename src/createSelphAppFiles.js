
const fs = require('fs-extra')

 const createSelphAppFiles = (name) => {
    fs.writeFileSync(`${name}/package.json`, `{
        "name": "${name}",
        "version": "1.0.0",
        "description": "",
        "main": "",
        "scripts": {
          "dev": "selph-cli dev",  
          "start": "selph-cli start",
          "start-frontend" : "selph-cli start-frontend",
          "start-backend" : "selph-cli start-backend",
          "build" : "selph-cli build"
        },
        "author": "",
        "license": "ISC",
        "dependencies": {
          "selph-cli": "^1.0.0"
        }
      }`)
      fs.writeFileSync(`${name}/selph.config.json`, `{
        "name": "${name}",
        "apiPort": 5000,
        "https": false,
        
        "modules": [
            {
                "name": "test",
                "model": {
                    "title": "String",
                    "link": {"type": "String"},
                    "stepNumber": {"type": "Number", "default": 0}
                }
            },
            {
                "name": "foreignKeyTest",
                "model": {
                    "test": "test",
                    "testByType": {"type": "test"}
                }
            }
        ],
        "baseModel": {
            "isActive": {"type": "Boolean", "default": true},
            "created_date": {"type": "Date", "default": "new Date()"}
        }
    }

    `)

}


module.exports = {
    createSelphAppFiles,
}