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


const promision = new Promise((resolve, reject) => {
  resolve();
});

promision
  .then(main())
  .then(createFrontPackageJson(name))
  .then(createBackendPackageJson(name))
  .then(createSelphAppFiles(name));

process.exit();
