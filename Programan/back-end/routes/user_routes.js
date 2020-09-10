const express = require( 'express' );
const users = require( '../models/user.js' );

const router = express.Router();

function validate( req, res, next ) {
    let user = req.body;
    let login;
    if( user.username ) {
        login = users.login( user );
    }
    if( login.exist ) {
        next( { code: 200, ...login } );
    }
    return res.send( { code: 400, ...login } );
}

router.get( '/' , ( req, res ) => {
    res.send( users.users() );
} );

router.post( '/singin/', ( req, res ) => {
    let user = req.body;
    let result;
    if( user.username && user.password ) {
        result = users.newUser( user );
    }
    res.send( result );
} );

router.post( '/login/', validate, ( req, res ) => {
    res.send();
} );

module.exports = router;