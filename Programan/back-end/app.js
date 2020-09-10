const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const userRoutes = require( './routes/user_routes.js' );
const productRoutes = require( './routes/product_route.js' );

const app = express();

app.use( (req, res, next ) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
} );

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get( '/', ( req, res ) => {
    res.send( 'Hello World!' );
});
app.use( '/users/', userRoutes );
app.use( '/products/', productRoutes );

app.listen( 3000, () => console.log('SERVER ONLINE') );