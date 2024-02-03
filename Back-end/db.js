/*const araya = ["merito", "langoleta", "manicuare", "tacarigua", "salazar"];

for(let i = 0; i < araya.length; i++){
    let prueba = araya[i]
    for(let j = 1 ; j < prueba.length; j++){
let nueva = prueba[j]
if(nueva === "a"){
    nueva = "p";
    return nueva
}
console.log(nueva);
    }
   
   
   
}*/

const { Sequelize } = require('sequelize');
require("dotenv").config();
const fs = require("fs");
const path = require("path");


const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rose_blue`);


const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring



module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  };