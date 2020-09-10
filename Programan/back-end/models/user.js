let userList = [];

class User {
    constructor( fullname, username, email, password ) {
        this.fullname = fullname ? fullname : 'Sin nombre';
        this.username = username;
        this.email = email ? email : 'sin email';
        this.password = password;
    }
}

userList.push( new User('jose pino', 'josepin', 'joseppin@yopmail.com', 'josepin123' ) );
userList.push( new User('jose pino0', 'josepin0', 'joseppin0@yopmail.com', 'josepin0123' ) );

function users() {
    return userList;
}

function newUser( user ) {
    let newU = new User ( user.fullname, user.username, user.email, user.password );
    userList.push( newU );
    return { code: 200, message: 'Registered Successfully', user: newU };
}

function login( user ) {
    for( let us of userList ) {
        if( us.username === user.username ) {
            if( us.password === user.password ) {
                return { exist: true, message: us } ;
            }
            return { exist: false, message: 'Error Password' };    
        }
        return { exist: false, message: 'User no found' };
    }
}

function exist( username ) {
    let result = false;
    for( let user of userList ) {
        if( user.username === username ) {
            result = true;
            break;
        }
    }
    return result;
}

module.exports = {
    users,
    newUser,
    login,
    exist
};