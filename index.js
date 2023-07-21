#!/usr/bin/env node

const cp = require("child_process");
const fs = require("fs-extra");
const path = require("path");
const {
  createFrontPackageJson,
  createBackendPackageJson,
} = require("./src/createPackageJsons");
const { createSelphAppFiles } = require("./src/createSelphAppFiles");

const name = process.argv.slice(2)[0];

const main = () => {
  console.log(`🟥 Selph - Creating App Called ${name}...`);
  cp.execSync(`mkdir ${name}`);

  fs.copySync(path.join(__dirname + "/template"), `${name}`);
};

const finishUp = () => {
  console.log(`🟥 Selph - installing Selph deps`)
  cp.execSync(`cd ${name} && npm i selph-cli@latest`, {stdio: 'inherit'})
  cp.execSync(`cd ${name}/backend && npm i`, {stdio: 'inherit'})
  cp.execSync(`cd ${name}/frontend && npm i`, {stdio: 'inherit'})
  console.log(`🟥 Selph - Your Selph App is ready to use!`)
}


const promision = new Promise((resolve, reject) => {
  resolve();
});

promision
  .then(main())
  .then(createFrontPackageJson(name))
  .then(createBackendPackageJson(name))
  .then(createSelphAppFiles(name))
  .then(finishUp());

process.exit();
