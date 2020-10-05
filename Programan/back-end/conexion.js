const Sequelize = require('sequelize');
const UserModel = require("./models/user");
const ProductModel = require("./models/product");

const sequelize = new Sequelize( "usados", "root", "root", {
    host: "localhost",
    dialect: "mariadb"
} );

const User = UserModel( sequelize, Sequelize );
const Product = ProductModel( sequelize, Sequelize );
Product.belongsTo( User, {
    foreignKey: 'id'
} )

sequelize.sync( { force: false } ).then( () => {
    console.info("Tablas sincronizadas");
} ).catch( console.error );

module.exports = {
    User,
    Product
}