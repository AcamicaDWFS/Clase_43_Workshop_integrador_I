function fibonacci( n ) {
    if( n === 0 || n === 1) {
        return n;
    } else if( n > 1 ) {
        return fibonacci( n - 1 ) + fibonacci( n - 2 );
    } else {
        console.error( 'el numero debe ser mayor a -1' );
    }
}

function show_fibonacci( n ) {
    for( let i = n; i > -1 ; i-- ) {
        console.log( fibonacci( i ) );
    }
}