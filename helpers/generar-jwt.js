const jwt = require('jsonwebtoken');



const generarJWT = (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid };
        console.log(uid);

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {

            console.log(process.env.SECRETORPRIVATEKEY);
            
            if (err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        });

    });
}




module.exports = {
    generarJWT
}

