const router = require("express").Router();
const { Product } = require("../conexion");

router.get("/", async (request, response) => {
    const products = await Product.findAll();
    response.send(products);
});

router.post("/new", async (request, response) => {
    const product = await Movie.create(request.body);
    response.json(product);
});

router.put("/buy/:id", async (request, response) => {
    await Product.update(request.body, {
        where: { id: request.params.id }
    });
    response.json({ success: "Producto actualizada" });
});

router.delete("/remove/:id", async (request, response) => {
    await Movie.destroy({
        where: { id: request.params.id }
    });
    response.json({ success: "Producto borrado" });
});

module.exports = router;

/* const express = require( 'express' );
const products = require( '../models/product.js' );
const users = require ( '../models/user.js' );

const router = express.Router();

function validateUser( req, res , next ){
    let data = req.body;
    let result;
    if( data.username ) {
        result = users.exist( data.username );
    }
    if( result ){
        next();
    }
    return { code: 400, message: 'Usuario invalido', username: data.username };
}

router.get( '/', ( req, res ) => {
    res.send(products.getAll());
} );

router.post( '/new/', validateUser, ( req, res ) => {
    let data = req.body;
    res.send( products.create( data ) );
});

router.post( '/buy/', validateUser, ( req, res ) => {
    let data = req.body;
    res.send( products.toBuy( data.username ) );
} );

router.post( '/mis/', validateUser, ( req, res ) => {
    let data = req.body;
    res.send( products.myProducts( data.username ) );
} );

router.put( '/buy/:name', ( req, res ) => {
    let data;
    if( req.params.name ) {
        data = { product: req.params.name, quantity: req.body.quantity };
        res.send( products.update ( data.product, data.quantity ) );
    }
} );

module.exports = router; */