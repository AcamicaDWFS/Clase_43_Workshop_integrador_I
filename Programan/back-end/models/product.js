const user = require("./user");

module.exports = (sequelize, type) => {
    return sequelize.define("product", {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: type.INTEGER,
            // references: {
            //     model: user,
            //     key: 'id'
            // }
        },
        name: type.STRING,
        description: type.STRING,
        stock: type.INTEGER,
        price: type.INTEGER,
        status: { type: type.ENUM,
                    values: [ 'disponible', 'vendido', 'enviado', 'entregado' ]
                }
    });
};

/* class Product {
    constructor( username, name, price, stock, description ) {
        this.username = username;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.description = description;
    }
}

let productsList = [];
productsList.push( new Product( 'josepin', 'tv32', 5000, 5, 'tv 32"' ) );
productsList.push( new Product( 'josepin', 'tv40', 10000, 2, 'tv 40"' ) );
productsList.push( new Product( 'josepin', 'tv50', 20000, 5, 'tv 50"' ) );
productsList.push( new Product( 'josepin', 'tv60', 25000, 3, 'tv 60"' ) );
productsList.push( new Product( 'josepin', 'tv70', 45000, 1, 'tv 70"' ) );

function create( product ) {
    productsList.push(
        new Product ( product.username, product.name, product.price, product.stock, product.description )
    );
    return { code: 200, message: 'Producto creado', item: product };
}

function toBuy( username ) {
    let arr = [];
    for( let prod of productsList ) {
        if( prod.username !== username ) {
            arr.push( prod );
        }
    }
    return { code: 200, message: 'Lista de productos disponibles', products: arr };
}

function myProducts( username ) {
    let arr = [];
    for( let prod of productsList ) {
        if( prod.username === username ) {
            arr.push( prod );
        }
    }
    return { code: 200, message: 'Lista de mis productos', products: arr };
}

function update( product, quantity ) {
    let sell;
    for( let prod of productsList ) {
        if( prod.name === product ) {
            prod.stock = prod.stock - quantity;
            sell = prod;
        }
    }
    return { code: 200, message: 'Existo al comprar', product: sell };
}

function getAll() {
    return { code: 200, message: 'lista de productos', products: productsList };
}

module.exports = {
    create,
    toBuy,
    myProducts,
    update,
    getAll
}; */