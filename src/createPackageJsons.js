const fs = require('fs-extra')

 const createFrontPackageJson = (name) => {
    fs.writeFileSync(`${name}/frontend/package.json`, `{
        "name": "${name}-frontend",
        "version": "0.1.0",
        "private": true,
        "dependencies": {
          "@testing-library/jest-dom": "^5.16.5",
          "@testing-library/react": "^13.4.0",
          "@testing-library/user-event": "^13.5.0",
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
          "start": "react-scripts start",
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
};
 const createBackendPackageJson = (name) => {
  fs.writeFileSync(`${name}/backend/package.json`, `{
    "name": "${name}-backend",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "start": "node src/app.js",
      "dev": "nodemon src/app.js",
      "createsuperuser": "node src/core/generators/createsuperuse.js"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
      "body-parser": "^1.20.2",
      "cors": "^2.8.5",
      "crypto": "^1.0.1",
      "dotenv": "^16.0.3",
      "express": "^4.18.2",
      "express-formidable": "^1.2.0",
      "jsonwebtoken": "^9.0.0",
      "mongoose": "^7.2.0",
      "multer": "^1.4.5-lts.1",
      "nodemon": "^2.0.22",
      "path": "^0.12.7",
      "prompt-sync": "^4.2.0"
    }
  }
  `)
}

module.exports = {
  createFrontPackageJson,
  createBackendPackageJson
}