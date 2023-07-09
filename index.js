#!/usr/bin/env node

const cp = require('child_process')
const fs = require('fs-extra')
var path = require('path');

// import cp from 'child_process'
// import fs from 'fs-extra'
// import path from 'path';

const name = process.argv.slice(2)[0];

const main = () => {
    console.log(`🟥 Selph - Creating App Called ${name}...`);
    cp.execSync(`mkdir ${name}`);
  
    fs.copySync(path.join(__dirname + '/template'), `${name}`)
   
}

const createFrontPackageJson = () => {
    fs.writeFileSync(`${name}/frontend/package.json`, `{
        "name": "${name}-frontend",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
          "@testing-library/jest-dom": "^5.16.5",
          "@testing-library/react": "^13.4.0",
          "@testing-library/user-event": "^13.5.0",
          "@types/three": "^0.149.0",
          "axios": "^1.1.2",
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
          "react-redux": "^8.0.4",
          "react-router-dom": "^6.4.2",
          "react-scripts": "5.0.1",
          "react-toastify": "^9.0.8",
          "redux": "^4.2.0",
          "redux-devtools-extension": "^2.13.9",
          "redux-thunk": "^2.4.1",
          "web-vitals": "^2.1.4",
          "workbox-background-sync": "^6.5.4",
          "workbox-broadcast-update": "^6.5.4",
          "workbox-cacheable-response": "^6.5.4",
          "workbox-core": "^6.5.4",
          "workbox-expiration": "^6.5.4",
          "workbox-google-analytics": "^6.5.4",
          "workbox-navigation-preload": "^6.5.4",
          "workbox-precaching": "^6.5.4",
          "workbox-range-requests": "^6.5.4",
          "workbox-routing": "^6.5.4",
          "workbox-strategies": "^6.5.4",
          "workbox-streams": "^6.5.4"
        },
        "scripts": {
          "start": "PORT=4321  react-scripts start",
          "build": "react-scripts build",
          "test": "react-scripts test",
          "eject": "react-scripts eject"
        },
        "eslintConfig": {
          "extends": [
            "react-app",
            "react-app/jest"
          ]
        },
        "browserslist": {
          "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
          ],
          "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
          ]
        },
        "devDependencies": {
          "autoprefixer": "^10.4.12",
          "postcss": "^8.4.17",
          "tailwindcss": "^3.1.8"
        }
      }
      `)
}

const createSelphAppFiles = () => {
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

const promision = new Promise((resolve, reject) => {
   
        resolve()
   
})

promision.then(main()).then(createFrontPackageJson()).then(createSelphAppFiles())

process.exit()